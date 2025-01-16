import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user!:User;
  constructor(private http:HttpClient) { }
  loginUser(name: string, password: string) {
    return this.http.post<User>(
      'http://localhost:5131/User/login',
      { name, password }
    );
  }
  registerUser(name: string, password: string) {
    return this.http.post<User>(
      'http://localhost:5131/User/register',
      { name, password }
    );
  }
    
}

