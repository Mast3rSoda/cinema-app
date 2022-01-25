import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movies-model';
import { Room } from 'src/app/models/rooms-model';
import { Screening } from 'src/app/models/screenings-model';

@Component({
  selector: 'app-screening-add',
  templateUrl: './screening-add.component.html',
  styleUrls: ['./screening-add.component.css']
})
export class ScreeningAddComponent implements OnInit {

  pattern: RegExp = new RegExp('(0[1-9]|1[0-2])\/\d{2}\/\d{4}');

  film = new FormControl('', { validators: Validators.required });
  sala = new FormControl('', { validators: Validators.required });
  date = new FormControl('', { validators: Validators.required });
  hour = new FormControl('', { validators: [Validators.required, Validators.min(0), Validators.max(23)] });
  minute = new FormControl('', { validators: [Validators.required, Validators.min(0), Validators.max(59)] });


  movies: Movie[] = [];
  rooms: Room[] = [];

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ScreeningAddComponent>
  ) {
    this.movies = data.movies;
    this.rooms = data.rooms;
  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  Submit() {
    var flag: boolean = false;

    if (!this.film.value) {
      flag = true;
    }
    if (!this.sala.value) {
      flag = true;
    }
    if (!this.date.value) {
      flag = true;
    }
    if (!this.hour.value || this.hour.value < 0 || this.hour.value > 23) {
      flag = true;
    }
    if (!this.minute.value || this.minute.value < 0 || this.minute.value > 59) {
      flag = true;
    }
    if (!flag) {
      var screening: Screening = new Screening(
        this.movies.indexOf(this.film.value),
        this.rooms.indexOf(this.sala.value),
        this.date.value.toLocaleDateString(),
        this.hour.value.toString() + ":" + this.minute.value.toString(),
        []
        )
      this.dialogRef.close(screening);

    }
  }


  myDateFilter = (date: Date | null): boolean => {
    const day: Date = (date || new Date());
    return day >= new Date();
  }

  getHourError() {
    if (this.hour.hasError('required')) {
      return 'Pole nie może być puste!';
    }
    else if (this.hour.hasError('min')) {
      return 'Godzina jest za mała!'
    }
    else if (this.hour.hasError('max')) {
      return 'Godzina jest za duża!'
    }
    return '';
  }

  getMinuteError() {
    if (this.minute.hasError('required')) {
      return 'Pole nie może być puste!';
    }
    else if (this.minute.hasError('min')) {
      return 'Minuta jest za mała!'
    }
    else if (this.minute.hasError('max')) {
      return 'Minuta jest za duża!'
    }
    return '';
  }

}
