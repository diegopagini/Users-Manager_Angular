import { Component, OnInit } from '@angular/core';
import { Users, UsersData } from 'src/app/core/interfaces/users.interface';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  
  currentInfo: Array<UsersData>;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers(); 
  }

  getUsers() {
    this.apiService.getUsers().subscribe((response: Users) => {
      this.currentInfo = response.results;
      console.log('data', this.currentInfo);
    })
  }
}
