import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movies-model';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {

  @Input() movie!: Movie;
  @Output() ondDleteMovie: EventEmitter<Movie> = new EventEmitter();

  showEdit: boolean = false;
  private routeSubscription!: Subscription;
  private id!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params[`id`];
    })
  }

  deleteMovie(movie: Movie): void {
    this.ondDleteMovie.emit(movie);
  }

  editToggle() {
    this.showEdit = !this.showEdit;
  }

}
