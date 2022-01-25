import { Screening } from './../../../models/screenings-model';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies-model';
import { Room } from 'src/app/models/rooms-model';

@Component({
  selector: 'app-screenings-item',
  templateUrl: './screenings-item.component.html',
  styleUrls: ['./screenings-item.component.css']
})
export class ScreeningsItemComponent implements OnInit {

  @Input() screening!: Screening;
  @Input() movie!: Movie;
  @Input() room!: Room;

  constructor() { }

  ngOnInit(): void {
  }

  checkIfRunning(): boolean {
    //godzina rozpoczecia < teraz
    if(new Date(this.screening.date+"T"+this.screening.hour) < new Date())
      return true;
    return false;
  }


}
