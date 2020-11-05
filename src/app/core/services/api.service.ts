import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API: string = 'https://randomuser.me/api/?results=100';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users>{
    return this.http.get<Users>(`${this.API}`);
  }
}

