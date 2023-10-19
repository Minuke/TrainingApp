import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CardMovieComponent } from "./components/card-movie/card-movie.component";
import { DetailsMovieComponent } from "./components/details-movie/details-movie.component";
import { ListMoviesComponent } from "./components/list-movies/list-movies.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PipesModule } from "../pipes/pipes.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';


@NgModule({
  declarations: [CardMovieComponent, ListMoviesComponent, DetailsMovieComponent, CardMovieComponent, AddMovieComponent, UpdateMovieComponent],
  exports: [CardMovieComponent, ListMoviesComponent, DetailsMovieComponent, CardMovieComponent],
  imports: [CommonModule, HttpClientModule, MoviesRoutingModule, SharedModule, PipesModule, FormsModule, PrimeNgModule, ReactiveFormsModule]
})
export class MoviesModule { }
