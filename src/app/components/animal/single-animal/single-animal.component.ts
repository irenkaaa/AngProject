import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/core/models/Animal';
import { AnimalService } from 'src/app/core/services/animal.service';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements DoCheck {
  @Input("animal")
  animal: Animal;
  isAdmin: boolean;

  constructor(
    private animalService:AnimalService,
    private router:Router,
    ) { }

  ngDoCheck() {
    this.isAdmin = localStorage.getItem('isAdmin') === 'true' ? true : false;
  }

  deleteAnimal(){
    this.animalService.deleteAnimal(this.animal._id)
    .subscribe((data) => {
      console.log(data)
      this.router.navigate(['/']);
    })
  }

}

