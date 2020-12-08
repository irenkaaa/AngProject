import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/core/services/animal.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private router:Router
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      breed: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required, Validators.min(0)]],
      date: ['', [Validators.required]],
      image: ['', [Validators.required]],
    })
  }


  addAnimal(){
    this.animalService.addAnimal(this.form.value).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/']);
    })
  }


  get f(){
    return this.form.controls;
  }

}