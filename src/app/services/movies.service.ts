import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { Actor } from '../interfaces/actor.interface';
import { Company } from '../interfaces/company.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  private moviesUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  private movieDeletedSource = new Subject<void>();
  movieDeleted$ = this.movieDeletedSource.asObservable();

  deleteMovieService() {
    this.movieDeletedSource.next();
  }

  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(`${ this.moviesUrl }/movies`);
  }

  getActors():Observable<Actor[]> {
    return this.http.get<Actor[]>(`${ this.moviesUrl }/actors`);
  }

  getCompanies():Observable<Company[]> {
    return this.http.get<Company[]>(`${ this.moviesUrl }/companies`);
  }

  getMovieById(id:number ): Observable<Movie> {
    return this.http.get<Movie>(`${this.moviesUrl }/movies/${ id }`);
  }

  getActorById(id:number ): Observable<Actor> {
    return this.http.get<Actor>(`${this.moviesUrl }/actors/${ id }`);
  }

  getCompanyById(id:number ): Observable<Company> {
    return this.http.get<Company>(`${this.moviesUrl }/Companies/${ id }`);
  }

  deleteMovie(id:number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.moviesUrl }/movies/${ id }`);
  }

}
