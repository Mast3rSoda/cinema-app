import { Movie } from 'src/app/models/movies-model';
import { Component, OnInit } from '@angular/core';
import { Screening } from 'src/app/models/screenings-model';
import { DataService } from 'src/app/services/data.service';
import { Room } from 'src/app/models/rooms-model';
import { MatDialog } from '@angular/material/dialog';
import { ScreeningAddComponent } from '../screening-add/screening-add.component';

@Component({
  selector: 'app-screenings-main',
  templateUrl: './screenings-main.component.html',
  styleUrls: ['./screenings-main.component.css']
})
export class ScreeningsMainComponent implements OnInit {

  screenings: Screening[] = [];
  movies: Movie[] = [];
  rooms: Room[] = [];

  date: Date = new Date();

  constructor(private dataService: DataService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.dataService.getMovies().subscribe(movies => {
      this.movies = movies;
    })
    this.dataService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    })
    this.dataService.getScreenings().subscribe(screenings => {
      this.screenings = screenings;
    })
  }

  openAddScreening(): void {
    const dialogRef = this.dialog.open(ScreeningAddComponent, {
      width: '600px',
      data: {
        movies: this.movies,
        rooms: this.rooms
      }
    });

    dialogRef.afterClosed().subscribe(screening => {
      if(screening !== undefined)
        console.log(screening);
        this.addScreening(screening);
    })
  }

  addScreening(screening: Screening): void {
    this.dataService.addScreening(screening).subscribe((screening) => {
      this.screenings.push(screening);
    })
  }

  updateScreening(screening: Screening) {
    this.dataService.updateScreening(this.screenings.indexOf(screening), screening).subscribe((screening) => {
      this.screenings[this.screenings.indexOf(screening)] = screening;
    })
  }

  filterScreenings(): Screening[] {
    let screeningsF: Screening[] = [];
    this.screenings.forEach(screening => {
      if(new Date(screening.date).getDay() == new Date(this.date).getDay())
        screeningsF.push(screening);
    });
    screeningsF.forEach(screening => {
      let date: Date = new Date(screening.date+"T"+screening.hour)
      date.setTime(date.getTime()+(this.movies[screening.movieId].duration*60*1000))
      if(new Date(date) <= new Date())
        screeningsF.splice(screeningsF.indexOf(screening), 1)
    })
    return screeningsF;
  };

  myDateFilter = (date: Date | null): boolean => {
    const day: Date = (date || new Date());
    return day >= new Date(Date.now() - 86400000);
  }

}
