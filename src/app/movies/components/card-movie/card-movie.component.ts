import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
import { Movie } from "src/app/interfaces/movie.interface";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnDestroy, OnChanges{

  @Input() public movie:Movie;
  @Output() public movieDeleted:EventEmitter<string> = new EventEmitter;
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
    this.moviesService.deleteMovie(movieId).subscribe(() => {
        this.closeDialog();
        this.movieDeleted.emit(this.movie.title);
        this.moviesService.deleteMovieService();
      });
  }

  showDialog():void {
    this.visible = true;
  }

  closeDialog():void {
    this.visible = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log("The card has been destroyed");
  }

}
