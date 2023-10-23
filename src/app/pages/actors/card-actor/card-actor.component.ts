
import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Actor, Gender } from 'src/app/interfaces/actor.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})
export class CardActorComponent implements OnInit{

  @Input() public actor!:Actor;
  public moviesInActor:Movie[] = []

  constructor(private moviesService:MoviesService) {}
  ngOnInit(): void {
  const movieObservables = this.actor.movies.map(movieId => this.moviesService.getMovieById(movieId));
  forkJoin(movieObservables).subscribe(movies => {
    this.moviesInActor = movies;
  });
  }
}
