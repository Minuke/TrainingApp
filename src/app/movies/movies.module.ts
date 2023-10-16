import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CardMovieComponent } from "./components/card-movie/card-movie.component";
import { DetailsMovieComponent } from "./components/details-movie/details-movie.component";
import { ListMoviesComponent } from "./components/list-movies/list-movies.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PipesModule } from "../pipes/pipes.module";
import { FormsModule } from "@angular/forms";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";


@NgModule({
  declarations: [CardMovieComponent, ListMoviesComponent, DetailsMovieComponent, CardMovieComponent],
  exports: [CardMovieComponent, ListMoviesComponent, DetailsMovieComponent, CardMovieComponent],
  imports: [CommonModule, HttpClientModule, MoviesRoutingModule, SharedModule, PipesModule, FormsModule, PrimeNgModule]
})
export class MoviesModule { }
