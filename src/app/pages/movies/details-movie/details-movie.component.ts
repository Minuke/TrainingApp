import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs";
import { Actor } from "src/app/interfaces/actor.interface";
import { Movie } from "src/app/interfaces/movie.interface";
import { MoviesService } from "src/app/services/movies.service";

;

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent {

  public movie!:Movie;
  public actorsInMovie:Actor[] = [];
  public isLoading:boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private moviesService:MoviesService) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.moviesService.getMovieById( id )),
    ).subscribe((movie:Movie) => {
      this.movie = movie;
      movie.actors.forEach((actorId) => {
        this.moviesService.getActorById(actorId).subscribe((actor:Actor) => {
          this.actorsInMovie.push(actor);
        });
      })
      this.isLoading = false;
    });


  }

}
