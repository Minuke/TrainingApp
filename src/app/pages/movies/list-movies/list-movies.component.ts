import { Component, OnInit } from "@angular/core";
import { Message, MessageService } from "primeng/api";
import { PaginatorState } from "primeng/paginator";
import { Observable, Subscription, of, switchMap } from "rxjs";
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
  public filteredMovies: Observable<Movie[]> = new Observable<Movie[]>;
  public isLoading:boolean = true;
  public movieDeletedSubscription:Subscription = new Subscription();
  public movieTitleDeleted:string = "";
  public first: number = 0;
  public rows: number = 6;
  public totalRecords:number = 0;
  public nextPage:number = 0;
  public messages: Message[] = [];
  public showPagination:boolean = true;
  public showToast:boolean = false;

  constructor(private moviesService:MoviesService, private messageService:MessageService) {}

  searchByMovie(term: string) {
    this.moviesService.getMovies().pipe(
      switchMap((movies: Movie[]) => {
        const filteredMovies = movies.filter((movie) =>
          movie.title.toLowerCase().includes(term.toLowerCase())
        );
        this.filteredMovies = of(filteredMovies);
        return this.filteredMovies;
      })
    ).subscribe((filteredMovies: Movie[]) => {
      this.movies = of(filteredMovies);
      if (filteredMovies.length === 0) {
        this.showPagination = false;
        this.messages = [{ severity: 'info', summary: 'Info', detail: 'There are no movies with this title' }];
        this.clear();
      }
    });
  }

  clear() {
    setTimeout(() => {
      this.messages = [];
    }, 1000);
  }

  ngOnInit(): void {

    this.movieDeletedSubscription = this.moviesService.movieDeleted$.subscribe(() => {
      this.refreshMovieList();
    });
    this.moviesService.getMovies().subscribe((movies:Movie[]) => {
      this.movies = this.moviesService.getMoviesPagination(this.nextPage,this.rows);
      this.isLoading = false;
      this.totalRecords = movies.length;
    });
  }

  onPageChange(event: PaginatorState) {
    if (event.page !== undefined) {
      this.nextPage = event.page + 1;
    }

    if (event.first !== undefined) {
      this.first = event.first;
    }
    if (event.rows !== undefined) {
      this.rows = event.rows;
    }
    this.moviesService.getMoviesPagination(this.nextPage,this.rows).subscribe((data)=> {
      this.movies = this.moviesService.getMoviesPagination(this.nextPage,this.rows);
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

