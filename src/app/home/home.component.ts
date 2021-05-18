import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies$: Observable<Movie[]>;
  tvShows$: Observable<Movie[]>;
  searchPhrase = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    //slati jedan request da u responsu imaju i listu filmova i tv shows a onda ih po kategoriji podijeliti na dva observable i time sam sve rijesio
    this.movies$ = this.moviesService.loadTopMovies(this.searchPhrase);
    this.tvShows$ = this.moviesService.loadTopTvShows(this.searchPhrase);
  }

  search(phrase: any){
    if (phrase.target.value.length >= 2){
      //slat request za serach i prosljedjivat ga na presentation
      this.searchPhrase = phrase.target.value;
      this.getData();
      console.log(this.searchPhrase);
    }
    if (phrase.target.value.length === 0){
      //slat request za top movies i pucat ga  na presentation
      this.searchPhrase = '';
      this.getData();
    }
  }

  onTabClick(event) {
    console.log(event);
    console.log(event.tab.textLabel);
  }

}
