import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/core/models/Animal';
import { AnimalService } from 'src/app/core/services/animal.service';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css']
})
export class DetailAnimalComponent implements OnInit {
  animal: Animal;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      let id = data['id'];
      this.animalService.getDetailsAnimal(id).subscribe((data)=> {
        console.log(data);
        this.animal = data;
      })  
    })
  }

}
