import { Component, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements DoCheck {
  username: string = '';
  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(private authService: AuthService, private router:Router) { }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isAdmin = localStorage.getItem('isAdmin') === 'true' ? true : false;
  }


  logout() {
    this.authService.logout()
    this.router.navigate([ '/login' ]);
  }

}