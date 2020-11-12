import { Component, OnInit } from '@angular/core';
import { Users, UsersData } from 'src/app/core/interfaces/users.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usersLength = [];
  usersData: Array<UsersData>;
  filterSelected: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.apiService.getUsers().subscribe((data: Users) => {
      console.log(data)
      this.usersData = data.results;
    })
  }

  onSendFilter(filter) {
    this.filterSelected = filter;
  }
}
