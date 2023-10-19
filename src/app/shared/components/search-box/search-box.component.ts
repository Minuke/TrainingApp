import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  private debouncer:Subject<string> = new Subject<string>

  @Output() public onValue = new EventEmitter<string>();
  @Output() public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(400),
    ).subscribe((value) => {
      this.onDebounce.emit(value);
    })
  }

  emitValue(value:string) {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string) {
    this.debouncer.next(searchTerm);
  }
}
