import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies-card-list',
  templateUrl: './movies-card-list.component.html',
  styleUrls: ['./movies-card-list.component.scss']
})
export class MoviesCardListComponent implements OnInit {

  @Input()
  movies: Movie[] = [];
  movie: Movie;
  
  thumbnail: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //console.log(this.movies);
  }
  getSrc(arrayBuffer){
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, ' + arrayBuffer);
  }

}
