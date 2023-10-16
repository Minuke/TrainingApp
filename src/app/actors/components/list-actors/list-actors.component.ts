import { Component } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.scss']
})
export class ListActorsComponent {

  public actors:Actor[] = [];
  public moviesInActor:Movie[] = [];
  public isLoading:boolean = true;

  constructor(private moviesService:MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getActors().subscribe((actors:Actor[]) => {
      this.actors = actors;
      this.isLoading = false;
    });
  }

}
