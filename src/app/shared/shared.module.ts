import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ]
})
export class SharedModule { }
