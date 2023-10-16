import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsMovieComponent } from "./components/details-movie/details-movie.component";
import { ListMoviesComponent } from "./components/list-movies/list-movies.component";

const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent,
  },
  {
    path: ':id',
    component: DetailsMovieComponent,
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MoviesRoutingModule { }
