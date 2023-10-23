import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { DetailsMovieComponent } from "./details-movie/details-movie.component";
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { UpdateMovieComponent } from "./update-movie/update-movie.component";

const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent,
  },
  {
    path: 'add-movie',
    component: AddMovieComponent,
  },
  {
    path: ':id/update-movie',
    component: UpdateMovieComponent,
  },
  {
    path: ':id',
    component: DetailsMovieComponent,
  },

]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MoviesRoutingModule { }
