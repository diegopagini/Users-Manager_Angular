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

  //currentInfo = ['eze','diego','mauro','damian']
  // filterResult = ['eze','diego','mauro','damian'] = currentInfo




  //input 'eze'
  //backup = this.currentInfo.filter('eze')
  


  @Input() currentInfo: Array<UsersData>;
  @Input() filterSelected: string;
  searchControl = new FormControl('');
  userDesdeHijo: UsersData;
  filterResult: Array<UsersData> = [];

  constructor() { }

  ngOnInit(): void {
    this.listenSearch();
  }

  listenSearch() {
    this.searchControl.valueChanges.subscribe(res => {
      this.filterResult = this.currentInfo.filter((el: UsersData) => {
        return el.name.first.toLocaleLowerCase().includes(res);
      })
    })
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.filterSelected) {
      if (changes.filterSelected.currentValue !== undefined) {
        this.filterCurrentInfo(changes.filterSelected.currentValue);
      }
    }
  }

  filterCurrentInfo(filtro) {
    if (filtro === "mayores") {
      this.filterResult = this.currentInfo.filter((el: UsersData) => {
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
    console.log('searching')
    console.log('dato del input ',this.searchControl.value)

    if (this.searchControl.value != '') {
      this.filterResult = this.currentInfo.filter((el: UsersData) => {
        return el.name.first.toLocaleLowerCase().includes(this.searchControl.value.toLocaleLowerCase());
      })
    } else {
      this.filterResult = this.currentInfo;
    }
  }

}
