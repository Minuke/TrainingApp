import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  exports: [ProgressSpinnerModule, DialogModule, ToastModule, PaginatorModule, MessagesModule
  ]
})
export class PrimeNgModule { }
