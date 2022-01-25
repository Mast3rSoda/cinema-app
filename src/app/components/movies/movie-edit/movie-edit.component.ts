import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movies-model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  @Input() movie!: Movie;
  @Output() onMovieSubmit: EventEmitter<Movie> = new EventEmitter();

  pattern: RegExp = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)');

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit() {
    var flag: boolean = false;

    if (!this.movie.title)
      flag = true;
    else if (this.movie.duration < 31)
      flag = true
    else if (this.movie.duration > 299)
      flag = true
    else if (!this.movie.duration)
      flag = true
    else if (!this.movie.description)
      flag = true
    else if(!this.movie.image)
      flag = true
    else if (!this.pattern.test(this.movie.image))
      flag = true
    
    if(!flag) {
      this.onMovieSubmit.emit(this.movie);
    }
    }

}
