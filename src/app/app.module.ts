import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesMainComponent } from './components/movies/movies-main/movies-main.component';
import { RoomsMainComponent } from './components/rooms/rooms-main/rooms-main.component';
import { ScreeningsMainComponent } from './components/screenings/screenings-main/screenings-main.component';
import { MoviesItemComponent } from './components/movies/movies-item/movies-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieAddComponent } from './components/movies/movie-add/movie-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieEditComponent } from './components/movies/movie-edit/movie-edit.component';
import { FormsModule } from '@angular/forms';
import { RoomItemComponent } from './components/rooms/room-item/room-item.component';
import { MatSliderModule } from '@angular/material/slider';
import { ScreeningsItemComponent } from './components/screenings/screenings-item/screenings-item.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ScreeningAddComponent } from './components/screenings/screening-add/screening-add.component';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ScreeningBuyComponent } from './components/screenings/screening-buy/screening-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesMainComponent,
    RoomsMainComponent,
    ScreeningsMainComponent,
    MoviesItemComponent,
    MovieAddComponent,
    MovieEditComponent,
    RoomItemComponent,
    ScreeningsItemComponent,
    ScreeningAddComponent,
    ScreeningBuyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
