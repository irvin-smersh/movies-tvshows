import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map} from 'rxjs/operators';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  loadTopMovies(searchPhrase: string): Observable<Movie[]> {
    //ovaj end point nije napravljen
    return this.http.get<Movie[]>('https://localhost:44313/api/movie')
    .pipe(
      map(response => response.map(data => new Movie(data))),
      shareReplay()
    );
  }

  loadTopTvShows(searchPhrase: string): Observable<Movie[]> {
    //ovaj end point nije napravljen
    return this.http.get<Movie[]>('https://localhost:44313/api/movie')
    .pipe(
      map(response => response.map(data => new Movie(data))),
      shareReplay()
    );
  }

  loadAllMovies(): Observable<Movie[]> {
    //ovaj end point nije napravljen
    return this.http.get<Movie[]>('https://localhost:44313/api/movies')
    .pipe(
      map(response => response.map(data => new Movie(data))),
      shareReplay()
    );
  }

}
