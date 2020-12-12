import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MustMatch } from '../../../core/validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), /*Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,16}$/)*/]],
      repeatPassword: ['', [Validators.required]],
      name: ['',[Validators.required, Validators.pattern(/[A-Z][a-z]+\s[A-Z][a-z]+/)]],
     }, {
      validator: MustMatch('password', 'repeatPassword')
  });
  }


  register(){
    //this.authService.register(this.form.value).subscribe((data)=>{
      console.log(this.form.controls.password.value)
      console.log(this.form.controls.repeatPassword.value)
      //this.router.navigate([ '/login' ]);
    //})
  }

  get f(){
    return this.form.controls;
  }

}
