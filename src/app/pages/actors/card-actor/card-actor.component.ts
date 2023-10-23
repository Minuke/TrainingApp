
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

  @Input() public actor:Actor;
  public moviesInActor:Movie[] = []

  constructor(private moviesService:MoviesService) {
    this.actor = {
      id: 0,
      first_name: "",
      last_name: "",
      gender: Gender.Male,
      bornCity: "",
      birthdate: "",
      img: null,
      rating: 0,
      movies: [],
      nombre_completo: "",
    };
  }
  ngOnInit(): void {
  const movieObservables = this.actor.movies.map(movieId => this.moviesService.getMovieById(movieId));
  forkJoin(movieObservables).subscribe(movies => {
    this.moviesInActor = movies;
  });
  }
}
