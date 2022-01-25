import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movies-model';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  pattern: RegExp = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)');

  name = new FormControl('', { validators: Validators.required });
  duration = new FormControl('', { validators: [Validators.required, Validators.min(31), Validators.max(299)] });
  description = new FormControl('', { validators: Validators.required });
  url = new FormControl('', { validators: [Validators.required, Validators.pattern(this.pattern)] });


  constructor(
    private dialogRef: MatDialogRef<MovieAddComponent>) {}

  ngOnInit(): void {
  }

  Submit() {
    var flag: boolean = false;

    if (!this.name.value) 
      flag = true;
    if (this.duration.value < 31 || this.duration.value > 299) 
      flag = true;
    if (!this.description.value) 
      flag = true;
    if (!this.url.value || !this.pattern.test(this.url.value)) 
      flag = true;
    if (!flag) {
      var movie: Movie = new Movie(
        this.name.value,
        this.duration.value,
        this.description.value,
        this.url.value)
      this.dialogRef.close(movie);
    }
  }

  getNameError() {
    if (this.name.hasError('required')) {
      return 'Pole nie może być puste!';
    }
    return '';
  }

  getDurationError() {
    if (this.duration.hasError('required')) {
      return 'Pole nie może być puste!';
    }
    else if (this.duration.hasError('min')) {
      return 'Długość jest za krótka!'
    }
    else if (this.duration.hasError('max')) {
      return 'Długość jest za długa!'
    }
    return '';
  }

  getDescriptionError() {
    if (this.description.hasError('required')) {
      return 'Pole nie może być puste!';
    }
    return '';
  }

  getErrorUrlMessage() {
    if (this.url.hasError('required')) {
      return 'Pole nie może być poste!';
    }
    else if (!this.pattern.test(this.url.value)) {
      return 'URL nie jest poprawne!'
    }
    return '';
  }


}
