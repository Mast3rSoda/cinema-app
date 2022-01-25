import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesMainComponent } from './components/movies/movies-main/movies-main.component';
import { RoomsMainComponent } from './components/rooms/rooms-main/rooms-main.component';
import { ScreeningBuyComponent } from './components/screenings/screening-buy/screening-buy.component';
import { ScreeningsMainComponent } from './components/screenings/screenings-main/screenings-main.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesMainComponent},
  {path: 'screenings', component: ScreeningsMainComponent},
  {path: 'rooms', component: RoomsMainComponent},
  {path: '*', component: HomeComponent},
  {path: 'screenings/:id', component: ScreeningBuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
