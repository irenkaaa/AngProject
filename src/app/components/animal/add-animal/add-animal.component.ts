import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/core/services/animal.service';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  form;
  faAngleRight = faAngleRight;

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private router:Router
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      title: ['',[Validators.required]],
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
      this.router.navigate(['/']);
    })
  }


  get f(){
    return this.form.controls;
  }

}