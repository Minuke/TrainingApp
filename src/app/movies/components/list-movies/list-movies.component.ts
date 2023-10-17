import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Movie } from "src/app/interfaces/movie.interface";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit{

  public movies: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public isLoading:boolean = true;

  constructor(private moviesService:MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies: Movie[]) => {
      this.movies.next(movies);
      this.isLoading = false;
    });
  }

}

