import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Users, UsersData } from '../../../core/interfaces/users.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
