import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
    first: number = 0;
    rows: number = 10;

    onPageChange(event: PaginatorState) {
      if (event.first !== undefined) {
        this.first = event.first;
      }
      if (event.rows !== undefined) {
        this.rows = event.rows;
      }
    }
}
