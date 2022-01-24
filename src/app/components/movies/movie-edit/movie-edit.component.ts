import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies-model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  @Input() movie!: Movie;


  constructor() {}
   

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
