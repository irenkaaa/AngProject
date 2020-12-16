import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/Animal';
import { AdoptionRequest } from '../models/AdoptionReq';



const addAnimal = 'http://localhost:5000/animal/create';
const getAllAnimals = 'http://localhost:5000/animal/all';
const getAnimalDetail = 'http://localhost:5000/animal/details/';
const postAdoption = 'http://localhost:5000/stats/create-adoption/';
const deleteAnimal = 'http://localhost:5000/animal/delete/';
const editAnimalInfo = 'http://localhost:5000/animal/edit/';
const getAllAdoptions = 'http://localhost:5000/stats/all-adoption';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  
   

  constructor(
    private http: HttpClient
  ) { }

  addAnimal(data) {
    return this.http.post(addAnimal, data);
  }

  getAllAnimals():Observable<Array<Animal>> {
    return this.http.get<Array<Animal>>(getAllAnimals);
  }

  getDetailsAnimal(id): Observable<Animal> {
    return this.http.get<Animal>(getAnimalDetail + id);
  }

  getAllAdoptionReq():Observable<Array<AdoptionRequest>> {
    return this.http.get<Array<AdoptionRequest>>(getAllAdoptions);
  }

  postAdoptionForm(body) {
    return this.http.post(postAdoption, body);
  }


  deleteAnimal(id){
    return this.http.delete(deleteAnimal + id);
  }

  editAnimalInfo(id,body){
    return this.http.put((editAnimalInfo + id), body);
  }

/*


  getFurniture(id): Observable<Furniture> {
    return this.http.get<Furniture>(getFurnitureDetail + id);
  }

*/
}
