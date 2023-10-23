import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaginatorComponent,
    SearchBoxComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PaginatorComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ]
})
export class SharedModule { }
