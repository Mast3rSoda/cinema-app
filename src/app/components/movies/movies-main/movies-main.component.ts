import { Room } from './../../../models/rooms-model';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies-model';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieAddComponent } from '../movie-add/movie-add.component';
import { Screening } from 'src/app/models/screenings-model';

@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.css']
})
export class MoviesMainComponent implements OnInit {

  movies: Movie[] = [];
  screenings: Screening[] = [];
  rooms: Room[] = [];

  date: Date = new Date();


  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
    this.dataService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
    this.dataService.getScreenings().subscribe(screenings => {
      this.screenings = screenings;
    });

  }

  getPop(movie: Movie): number {
    var pop: number = 0;
    let i: number = 1;
    let screeningsF: Screening[] = [];
    this.screenings.forEach(screening => {
      if (new Date(screening.date).getDay() == new Date(this.date).getDay())
        screeningsF.push(screening);
    })
    screeningsF.forEach(screening => {
      if (screening.movieId == this.movies.indexOf(movie)) {
        pop += ((screening.taken.length / this.rooms[screening.roomId].capacity)*100) / i;
        i++;
      }
    })
    return pop;
  }

  //TODO make a func that passes the value of seatsTaken/roomCapacity based on movie

  openAddMovie(): void {
    const dialogRef = this.dialog.open(MovieAddComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(movie => {
      if (movie !== undefined)
        this.addMovie(movie);
    })
  }

  addMovie(movie: Movie): void {
    this.dataService.addMovie(movie).subscribe((movie) => {
      this.movies.push(movie);
    })
  }

  updateMovie(movie: Movie): void {
    const id: number = this.movies.indexOf(movie);
    this.dataService.updateMovie(id, movie).subscribe((movie) => {
      movie = this.movies[id];
    });

  }

  deleteMovie(movie: Movie): void {
    const id: number = this.movies.indexOf(movie);
    this.dataService.deleteMovie(id).subscribe(() => {
      this.movies = this.movies.filter(m => this.movies.indexOf(m) !== id);
    })
  }
}
