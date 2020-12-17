import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/models/Animal';
import { User } from 'src/app/core/models/User';
import { AnimalService } from 'src/app/core/services/animal.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-adopt-animal',
  templateUrl: './adopt-animal.component.html',
  styleUrls: ['./adopt-animal.component.css']
})
export class AdoptAnimalComponent implements OnInit {
  animal:Animal;
  user:User
  form;
  id:string;
  userId:string;

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private userService: UserService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.animalService.getDetailsAnimal(this.id).subscribe((data)=>{
      this.animal = data;
    })
    this.userId = localStorage.getItem('id')
    this.userService.getUserInfo(this.userId).subscribe((data)=>{
      this.user = data['response'];
      this.form = this.fb.group({
        fullName: ['',[Validators.required,Validators.pattern(/[A-Z][a-z]+\s[A-Z][a-z]+/)]],
        address: ['', [Validators.required, Validators.pattern(/[A-Z][a-z]+,\s[A-Z][a-z]+/)]],
        email: [this.user.email, []],
        phoneNumber: ['', [Validators.required,Validators.pattern(/^((\\+359-?)|0)?[0-9]{12}$/)]],
        birthDate: ['', [Validators.required,Validators.min(18)]],
        animalId: [this.id, [Validators.nullValidator]]
      })
      
    })

    
  }


  adoptAnimal(){

    this.animalService.postAdoptionForm(this.form.value).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }

  get f(){
    return this.form.controls;
  }

}