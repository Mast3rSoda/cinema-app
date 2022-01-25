import { Movie } from 'src/app/models/movies-model';
import { Component, OnInit } from '@angular/core';
import { Screening } from 'src/app/models/screenings-model';
import { DataService } from 'src/app/services/data.service';
import { Room } from 'src/app/models/rooms-model';

@Component({
  selector: 'app-screenings-main',
  templateUrl: './screenings-main.component.html',
  styleUrls: ['./screenings-main.component.css']
})
export class ScreeningsMainComponent implements OnInit {

  screenings: Screening[] = [];
  movies: Movie[] = [];
  rooms: Room[] = [];

  constructor(private dataService: DataService) { }

  
  

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

  myDateFilter = (date: Date | null): boolean => {
    const day = (date || new Date());
    return day >= new Date(Date.now() - 86400000);
  }

}
