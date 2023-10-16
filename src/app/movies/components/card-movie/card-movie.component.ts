import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "src/app/interfaces/movie.interface";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input() public movie:Movie;
  public visible:boolean = false;
  public movieToDelete!:Movie;

  constructor(private moviesService:MoviesService, private router:Router) {
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
    this.router.navigate(['/actors']);
  }

  showDialog():void {
    this.visible = true;
  }

  closeDialog():void {
    this.visible = false;
  }

}
