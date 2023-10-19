import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaginatorComponent,
    SearchBoxComponent,
  ],
  exports: [NavbarComponent, FooterComponent, PaginatorComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ]
})
export class SharedModule { }
