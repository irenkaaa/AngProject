import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from 'src/app/core/services/animal.service';
import { AdoptionRequest } from '../../../core/models/AdoptionReq';

@Component({
  selector: 'app-list-adoption-requests',
  templateUrl: './list-adoption-requests.component.html',
  styleUrls: ['./list-adoption-requests.component.css']
})
export class ListAdoptionRequestsComponent implements OnInit {
  adoptionReq$: Observable<Array<AdoptionRequest>>;

  constructor(
    private animalService:AnimalService
  ) { }

  ngOnInit() {
    this.adoptionReq$ = this.animalService.getAllAdoptionReq();
  }

  load(){

  }
}
