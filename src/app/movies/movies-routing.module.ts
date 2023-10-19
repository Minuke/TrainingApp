import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsMovieComponent } from "./components/details-movie/details-movie.component";
import { ListMoviesComponent } from "./components/list-movies/list-movies.component";
import { AddMovieComponent } from "./components/add-movie/add-movie.component";
import { UpdateMovieComponent } from "./components/update-movie/update-movie.component";

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
