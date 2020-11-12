import { Component, Input, OnInit } from '@angular/core';
import { Users, UsersData } from 'src/app/core/interfaces/users.interface';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  
  @Input() user: UsersData;

  constructor() { }

  ngOnInit(): void {}
}
