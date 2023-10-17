import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Movie } from "src/app/interfaces/movie.interface";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],

})
export class CardMovieComponent {

  @Input() public movie:Movie;
  public visible:boolean = false;

  constructor(private moviesService:MoviesService) {
    this.movie = {
      id: 0,
      title: '',
      poster: null,
      genre: [],
      year: 0,
      duration: 0,
      imdbRating: 0,
      actors: []
    };
  }

  deleteMovie(movieId:number):void {
    this.moviesService.deleteMovie(movieId).subscribe();
    location.reload();
  }

  showDialog():void {
    this.visible = true;
  }

  closeDialog():void {
    this.visible = false;
  }

}
