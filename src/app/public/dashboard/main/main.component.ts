import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Users, UsersData } from '../../../core/interfaces/users.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() currentInfo: Array<UsersData>;
  @Input() filterSelected: string;
  searchControl = new FormControl('');
  userDesdeHijo: UsersData;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges){
    if (changes.filterSelected) {
      if (changes.filterSelected.currentValue !== undefined) {
        this.filterCurrentInfo(changes.filterSelected.currentValue);
      }
    }
  }

  filterCurrentInfo(filtro) {
    if (filtro === "mayores") {
      this.currentInfo = this.currentInfo.filter((el: UsersData) => {
        return el.dob.age >= 60
      });
    }
  }

  onSendUser(userDesdeElHijo) {
    this.userDesdeHijo = userDesdeElHijo;
  } 

  limpiarUserHijo() {
    this.userDesdeHijo = null;
  }

  searching() {
    this.currentInfo = this.currentInfo.filter((el: UsersData) => {
      el.name.first == this.searchControl.value;
    })
  }

}
