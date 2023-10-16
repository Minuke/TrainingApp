import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.scss']
})
export class CardCompanyComponent implements OnInit {

  @Input() public company:Company;
  public moviesProduced:Movie[] = [];

  constructor(private moviesService:MoviesService) {
    this.company = {
      id: 0,
      name: "",
      country: "",
      createYear: 0,
      employees: 0,
      rating: 0,
      movies: [],
    };
  }
  ngOnInit(): void {
    this.company.movies.forEach((movieId:number) => {
      this.moviesService.getMovieById(movieId).subscribe((movie:Movie) => {
        this.moviesProduced.push(movie);
      })
    })
  }
}
