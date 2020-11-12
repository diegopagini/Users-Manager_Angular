import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  usersFemale: Array<UsersData>;
  usersMale: Array<UsersData>;
  currentInfo: Array<UsersData>;
  usersFemaleLength: number;
  usersMaleLength: number;

  API: string = 'https://randomuser.me/api/?results=100';

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.getUsers();
    this.getFemale();
    this.getMale();
  }

  getUsers() {
    this.apiService.getUsers().subscribe((response: Users) => {
      this.usersLength = response.results.length;
      console.log('Cantidad de Usuarios', this.usersLength);
    })
  }

  getFemale() {
    this.apiService.getUsers().subscribe((response: Users) => {
      this.usersFemale = response.results.filter(el => {
        return el.gender === 'female';
      })
      this.usersFemaleLength = this.usersFemale.length
      console.log('Cantidad de Mujeres', this.usersFemaleLength);
    })
  }

  getMale() {
    this.apiService.getUsers().subscribe((response: Users) => {
      this.usersMale = response.results.filter(el => {
        return el.gender === 'male';
      })
      this.usersMaleLength = this.usersMale.length
      console.log('Cantidad de Hombres', this.usersMaleLength);
    })
  }


}
