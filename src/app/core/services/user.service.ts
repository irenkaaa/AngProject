import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const userInfo = 'http://localhost:5000/stats/one/';
const getAllUsers = 'http://localhost:5000/stats/allusers';
const promoteUser = 'http://localhost:5000/stats/promote/';
const deleteUser = 'http://localhost:5000/stats/delete/';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(id:string){
    return this.http.get(userInfo + id);
  }


  getAllUsers():Observable<Array<User>> {
    return this.http.get<Array<User>>(getAllUsers);
  }

  promoteUserToAdmin(id:string,body) {
    return this.http.put(promoteUser + id, body);
  }

  deleteUser(id:string) {
    return this.http.delete(deleteUser + id);
  }


}
