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
    this.dataService.getMovies().subscribe(moviees => {
      this.movies = moviees;
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
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(screening => {
      // if(screening !== undefined)
      //   this.addScreening(screening);
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
      date.setMinutes(date.getMinutes()+this.movies[screening.movieId].duration)
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
