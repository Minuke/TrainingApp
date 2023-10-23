import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { MoviesRoutingModule } from "./movies-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/pipes/pipes.module";
import { PrimeNgModule } from "src/app/prime-ng/prime-ng.module";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { CardMovieComponent } from "./card-movie/card-movie.component";
import { DetailsMovieComponent } from "./details-movie/details-movie.component";
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { UpdateMovieComponent } from "./update-movie/update-movie.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [CardMovieComponent, ListMoviesComponent, DetailsMovieComponent, AddMovieComponent, UpdateMovieComponent],
    exports: [CardMovieComponent, ListMoviesComponent, DetailsMovieComponent, AddMovieComponent, UpdateMovieComponent],
    imports: [CommonModule, HttpClientModule, MoviesRoutingModule, SharedModule, PipesModule, FormsModule, PrimeNgModule, ReactiveFormsModule]
})
export class MoviesModule { }
