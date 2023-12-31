import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from 'src/app/interfaces/movie.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.scss']
})
export class CardCompanyComponent implements OnInit {

  @Input() public company!:Company;
  public moviesProduced:Movie[] = [];

  constructor(private moviesService:MoviesService) {}
  ngOnInit(): void {
    const movieObservables = this.company.movies.map(movieId => this.moviesService.getMovieById(movieId));
    forkJoin(movieObservables).subscribe(movies => {
      this.moviesProduced = movies;
    });
  }
}
