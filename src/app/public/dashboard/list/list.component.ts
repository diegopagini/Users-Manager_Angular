import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users, UsersData } from 'src/app/core/interfaces/users.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  usersLength: number;

  usersFemaleLength: number;
  usersMaleLength: number;

  @Input() currentInfo;

  constructor() { }
  
  ngOnInit(): void {
    this.usersLength = this.currentInfo.length;

    this.usersFemaleLength = this.getCantGenero('female');
    this.usersMaleLength =this.getCantGenero('male');
  }

  getCantGenero(genero: string) {
    return this.currentInfo.filter(el => {
      return el.gender === genero;
    }).length;
  }
}
