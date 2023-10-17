import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [ProgressSpinnerModule, DialogModule, ToastModule
  ]
})
export class PrimeNgModule { }
