import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/models/Animal';
import { AnimalService } from 'src/app/core/services/animal.service';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  id: string;
  animal:Animal;
  editForm;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private router: Router,
    private fb: FormBuilder,

    ) {  }
    

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    this.animalService.getDetailsAnimal(this.id).subscribe((data)=> {
        this.animal = data;
        this.editForm = this.fb.group({
          title: [this.animal.title,[]],
          breed: [this.animal.breed,[]],
          sex: [this.animal.sex,[]],
          description: [this.animal.description,[]],
          age: [this.animal.age, []],
          date: [this.animal.date, []],
          image: [this.animal.image, []],
        });
    })  
  }

  

  editAnimal(){
    const body = this.editForm.value;
    this.animalService.editAnimalInfo(this.id,body).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }

  deleteAnimal(){
    this.animalService.deleteAnimal(this.id)
    .subscribe((data) => {
      if(data['success']) {
      this.router.navigate(['/']); 
    }
    })
  }

  back() {
    this.router.navigate(['/']);
  }

}

