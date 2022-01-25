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

  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.dataService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
      this.dataService.getScreenings().subscribe(screenings => {
        this.screenings = screenings;
        console.log(screenings);
      })
  }

  //TODO make a func that passes the value of seatsTaken/roomCapacity based on movie

  openAddMovie(): void {
    const dialogRef = this.dialog.open(MovieAddComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(movie => {
      if(movie !== undefined)
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
