import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaginatorComponent,
  ],
  exports: [NavbarComponent, FooterComponent, PaginatorComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ]
})
export class SharedModule { }
