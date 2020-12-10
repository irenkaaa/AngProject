import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/core/models/Animal';
import { AnimalService } from 'src/app/core/services/animal.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {

  allAnimals$: Observable<Array<Animal>>;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.allAnimals$ = this.animalService.getAllAnimals();
  }

}
