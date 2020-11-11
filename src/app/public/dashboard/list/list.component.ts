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
  currentInfo: Array<UsersData>;

  API: string = 'https://randomuser.me/api/?results=100';

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.apiService.getUsers().subscribe((response: Users) => {
      this.usersLength = response.results.length;
      console.log('Cantidad de Usuarios', this.usersLength);
    })
  }
}
