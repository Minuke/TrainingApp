import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Output() public onValue = new EventEmitter<string>();

  emitValue(value:string) {
    this.onValue.emit(value);
  }
}
