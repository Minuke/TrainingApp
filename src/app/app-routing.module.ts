import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes:Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesModule )
  },
  {
    path: 'actors',
    loadChildren: () => import('./pages/actors/actors.module').then( m => m.ActorsModule )
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesModule )
  },
  {
    path: '**',
    redirectTo: 'movies'
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
