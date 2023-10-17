import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ToastComponent,
  ],
  exports: [NavbarComponent, FooterComponent, ToastComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ]
})
export class SharedModule { }
