import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Movie } from 'src/app/models/movies-model'
import { Room } from '../models/rooms-model';
import { Screening } from '../models/screenings-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'http://localhost:7777';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/movies`)
    .pipe(catchError((error: any) => { 
      return throwError(() => {
        console.error(error);
      }); 
    }))
  };

  public addMovie(movie: Movie): Observable<Movie> {
    console.log(movie);
    const url = `${this.url}/add/movie`;
    return this.http.post<Movie>(url, {
      "title": movie.title,
      "duration": movie.duration.toString(),
      "description": movie.description,
      "image": movie.image
    }, {headers: { 'Content-type': 'application/json'}});
  }

  public deleteMovie(id: number): Observable<Movie> {
    const url = `${this.url}/delete/movies/${id}`;
    return this.http.delete<Movie>(url);
  }

  public updateMovie(id: number, movie: Movie): Observable<Movie> {
    const url = `${this.url}/update/movie/${id}`;
    return this.http.put<Movie>(url, {
      "title": movie.title,
      "duration": movie.duration.toString(),
      "description": movie.description,
      "image": movie.image
    }, {headers: { 'Content-type': 'application/json'}});
  }

  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}/rooms`)
    .pipe(catchError((error: any) => { 
      return throwError(() => {
        console.error(error);
      }); 
    }))
  };

  public getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.url}/rooms/${id}`)
    .pipe(catchError((error: any) => { 
      return throwError(() => {
        console.error(error);
      }); 
    }))
  };

  public getScreening(id: number): Observable<Screening> {
    return this.http.get<Screening>(`${this.url}/screenings/${id}`)
    .pipe(catchError((error: any) => { 
      return throwError(() => {
        console.error(error);
      }); 
    }))
  };

  public getScreenings(): Observable<Screening[]> {
    return this.http.get<Screening[]>(`${this.url}/screenings`)
    .pipe(catchError((error: any) => { 
      return throwError(() => {
        console.error(error);
      }); 
    }))
  };

  public addScreening(screening: Screening): Observable<Screening> {
    console.log(screening);
    const url = `${this.url}/add/screening`;
    return this.http.post<Screening>(url, {
      "movieId": screening.movieId,
      "roomId": screening.roomId,
      "date": screening.date,
      "hour": screening.hour,
      "taken": screening.taken,
    }, {headers: { 'Content-type': 'application/json'}});
  }

  public updateScreening(id: number, screening: Screening): Observable<Screening> {
    const url = `${this.url}/update/screening/${id}`;
    return this.http.put<Screening>(url, {
      "movieId": screening.movieId,
      "roomId": screening.roomId,
      "date": screening.date,
      "hour": screening.hour,
      "taken": screening.taken,
    }, {headers: { 'Content-type': 'application/json'}});
  }
  
}
