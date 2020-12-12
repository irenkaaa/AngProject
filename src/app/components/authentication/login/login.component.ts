import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6) /*Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,16}$/)*/]],
    })
  }


  login(){
    this.authService.login(this.form.value).subscribe((data)=>{
      this.router.navigate([ '/' ]);
    })
  }

  get f(){
    return this.form.controls;
  }

}