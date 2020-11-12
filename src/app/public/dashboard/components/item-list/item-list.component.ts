import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() userData;
  @Output() sendUser = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {}

  selectUser(user) {
    this.sendUser.emit(user)
  }
}
