import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  exports: [ProgressSpinnerModule, DialogModule
  ]
})
export class PrimeNgModule { }
