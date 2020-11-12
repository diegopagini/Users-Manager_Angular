import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() sendFilter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFilter(filtro) {
    this.sendFilter.emit(filtro);
  }

}
