import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  exports: [ProgressSpinnerModule, DialogModule, ToastModule, PaginatorModule
  ]
})
export class PrimeNgModule { }
