import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from 'src/app/models/rooms-model';
import { Screening } from 'src/app/models/screenings-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screening-buy',
  templateUrl: './screening-buy.component.html',
  styleUrls: ['./screening-buy.component.css']
})
export class ScreeningBuyComponent implements OnInit {

  id!: number;
  @Input() screening!: Screening;
  @Input() room!: Room;
  @Output() onSave: EventEmitter<Screening> = new EventEmitter();

  taken: number[] = [];

  seats: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.createSeats();
  }

  createSeats() {
    for(let i = 0; i < this.room.capacity; i++) {
      this.seats[i] = i;
    }
  }

  toggleSeat(seat: number) {
    if(this.taken.includes(seat))
      this.taken.splice(this.taken.indexOf(seat), 1)
    else
      this.taken.push(seat);
  }

  saveValues() {
    this.taken.forEach(v => {
      console.log(this.screening, v)
      this.screening.taken.push(v+1);
    })
    this.onSave.emit(this.screening);
  }

  getValues(): string {
    let v: number[] = [];
    for(let x of this.taken)
      v.push(x+1);
    return v.toString();
  }

}
