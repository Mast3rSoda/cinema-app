import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movies-model';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {

  @Input() movie!: Movie;
  @Output() ondDleteMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() onUpdateMovie: EventEmitter<Movie> = new EventEmitter();

  showEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {  }

  deleteMovie(movie: Movie): void {
    this.ondDleteMovie.emit(movie);
  }

  updateMovie(movie: Movie) {
    this.onUpdateMovie.emit(movie);
    this.editToggle();
  }

  editToggle() {
    this.showEdit = !this.showEdit;
  }

}
