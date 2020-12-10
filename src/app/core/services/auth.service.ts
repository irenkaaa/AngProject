import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly loginUrl = 'http://localhost:5000/auth/login';
  private readonly registerUrl = 'http://localhost:5000/auth/register';

  constructor(
    private http: HttpClient
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  register(body: Object) {
    return this.http.post(this.registerUrl, body);
  }

  login(body: Object) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return this.token !== null;
  }

  saveUserInfo(res: Object) {    
    localStorage.setItem('username', res['user']['name']);
    localStorage.setItem('token', res['token'])
  }
}