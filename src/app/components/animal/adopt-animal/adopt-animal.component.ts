import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/core/services/animal.service';

@Component({
  selector: 'app-adopt-animal',
  templateUrl: './adopt-animal.component.html',
  styleUrls: ['./adopt-animal.component.css']
})
export class AdoptAnimalComponent implements OnInit {

  form;
  

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private router:Router
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
    })
  }


  adoptAnimal(){
    this.animalService.addAnimal(this.form.value).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/']);
    })
  }


  get f(){
    return this.form.controls;
  }

}