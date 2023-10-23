import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MoviesModule } from './pages/movies/movies.module';
import { ActorsModule } from './pages/actors/actors.module';
import { CompaniesModule } from './pages/companies/companies.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
    MoviesModule,
    ActorsModule,
    CompaniesModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
