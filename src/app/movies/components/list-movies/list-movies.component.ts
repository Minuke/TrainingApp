import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Observable, Subscription } from "rxjs";
import { Movie } from "src/app/interfaces/movie.interface";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  providers: [MessageService]
})
export class ListMoviesComponent implements OnInit{

  public movies: Observable<Movie[]> = new Observable<Movie[]>;
  public isLoading:boolean = true;
  public movieDeletedSubscription:Subscription = new Subscription();
  public movieTitleDeleted:string = "";

  constructor(private moviesService:MoviesService, private messageService:MessageService) {}

  ngOnInit(): void {
    this.movieDeletedSubscription = this.moviesService.movieDeleted$.subscribe(() => {
      this.refreshMovieList();
    });
    this.moviesService.getMovies().subscribe(() => {
      this.movies = this.moviesService.getMovies();
      this.isLoading = false;
    });
  }

  refreshMovieList() {
    this.movies = this.moviesService.getMovies();
    const message = `The movie <b>${this.movieTitleDeleted}</b> has been removed`;
    this.showSuccessToast(message);
  }

  showSuccessToast(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  receiveMovieDeleted(movieTitle:string) {
    this.movieTitleDeleted = movieTitle
  }
}

