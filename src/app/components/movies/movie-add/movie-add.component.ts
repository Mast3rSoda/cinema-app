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

  form!: FormGroup;
  pattern = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)');

  checkName = new FormControl('', { validators: Validators.required });
  checkDuration = new FormControl('', [Validators.required, Validators.min(31), Validators.max(299)]);
  checkDescription = new FormControl('', { validators: Validators.required });
  checkUrl = new FormControl('', { validators: [Validators.required, Validators.pattern(this.pattern)] });


  constructor(
    private dialogRef: MatDialogRef<MovieAddComponent>,
    private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      movieName: [''],
      movieDuration: [''],
      moviePosterUrl: [''],
      movieDescription: ['']
    })
  }

  ngOnInit(): void {
  }

  Submit() {
    var movie: Movie = new Movie(
      this.form.value.movieName,
      this.form.value.movieDuration,
      this.form.value.movieDescription,
      this.form.value.moviePosterUrl)
    var flag: boolean = false;

    if (!this.form.value.movieName) {
      this.checkDuration.setErrors(Validators.required);
      this.checkName.updateValueAndValidity();
      flag = true;
    }
    if (this.form.value.movieDuration < 31 || this.form.value.movieDuration > 299) {
      if (this.form.value.movieDuration === null){
        this.checkDuration.setErrors(Validators.required);
        this.form.value.movieDuration = '';
    }
      flag = true;
      if(this.form.value.movieDuration < 31)
      this.checkDuration.setErrors(Validators.min);
      else
        this.checkDuration.setErrors(Validators.max);

      this.checkDuration.updateValueAndValidity();
    }
    if (!this.form.value.movieDescription) {
      this.checkDuration.setErrors(Validators.required);
      this.checkDescription.updateValueAndValidity();
      flag = true;
    }
    if (!this.form.value.moviePosterUrl || !this.pattern.test(this.form.value.moviePosterUrl)) {
      if(!this.form.value.moviePosterUrl)
        this.checkDuration.setErrors(Validators.required);
      else
        this.checkDuration.setErrors(Validators.pattern);
      this.checkUrl.updateValueAndValidity();
      flag = true;
    }
    if (!flag) {
      this.dialogRef.close(movie);
    }
  }

  getNameError() {
    if (this.checkName.hasError('required') && this.form.value.movieName.length == 0) {
      return 'Pole nie może być puste!';
    }
    else
      setTimeout(() => {
        this.checkName.updateValueAndValidity();
        this.checkName.setErrors(null);
      }, 0);
    return '';
  }

  getDurationError() {
    if (this.checkDuration.hasError('required') && this.form.value.movieDuration == '') {
      return 'Pole nie może być puste!';
    }
    else if (this.form.value.movieDuration < 31 || this.checkDuration.hasError('min')) {
      return 'Długość jest za krótka!'
    }
    else if (this.form.value.movieDuration > 299 || this.checkDuration.hasError('max')) {
      return 'Długość jest za długa!'
    }
    else
      setTimeout(() => {
        this.checkDuration.setErrors(null)
      }, 0);
    return '';
  }

  getDescriptionError() {
    if (this.checkDescription.hasError('required') && this.form.value.movieDescription.length == 0) {
      return 'Pole nie może być puste!';
    }
    else
      setTimeout(() => {
        this.checkDescription.updateValueAndValidity();
        this.checkDescription.setErrors(null);
      }, 0);
    return '';
  }

  getErrorUrlMessage() {
    if (this.checkUrl.hasError('required') && this.form.value.moviePosterUrl.length == 0) {
      return 'Pole nie może być poste!';
    }
    else if (!this.pattern.test(this.form.value.moviePosterUrl)) {
      return 'URL nie jest poprawne!'
    }
    else
      setTimeout(() => {
        this.checkUrl.updateValueAndValidity();
        this.checkUrl.setErrors(null);
      }, 0);
    return '';
  }


}
