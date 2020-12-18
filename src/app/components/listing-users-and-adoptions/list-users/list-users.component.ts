import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users$: Observable<Array<User>>;
  userInfo: User;
  isAdmin: boolean;
  userId: string;

  constructor(
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getAllUsers();
  }

  promoteToAdmin(userId){
    const body = { isAdmin: true }
    this.userService.promoteUserToAdmin(userId, body).subscribe((data) => {
      this.users$ = this.userService.getAllUsers();
      this.router.navigate(['/user/all']);
    });
  }

  deleteUser(userId){
    this.userService.deleteUser(userId).subscribe((data)=> {
      this.users$ = this.userService.getAllUsers();
      this.router.navigate(['user/all']);
    })
  }

}
