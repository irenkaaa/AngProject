import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly loginUrl = 'http://localhost:5000/auth/login';
  private readonly registerUrl = 'http://localhost:5000/auth/register';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  get isAdmin() {
    return localStorage.getItem('isAdmin');
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
    localStorage.setItem('username', res['user']['username']);
    localStorage.setItem('isAdmin', res['user']['isAdmin']);
    localStorage.setItem('id', res['user']['id']);
    localStorage.setItem('token', res['token'])
    
  }
}