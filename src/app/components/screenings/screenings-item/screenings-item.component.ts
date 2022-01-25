import { Screening } from './../../../models/screenings-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() onBuyTickets: EventEmitter<Screening> = new EventEmitter();

  @Input() screenings!: Screening[];

  showBuy: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkIfRunning(): boolean {
    if(new Date(this.screening.date+"T"+this.screening.hour) < new Date())
      return true;
    return false;
  }


  buyTicket(screening: Screening) {
    this.buyToggle();
    this.onBuyTickets.emit(screening);
  }

  buyToggle() {
    this.showBuy = !this.showBuy;
  }
}
