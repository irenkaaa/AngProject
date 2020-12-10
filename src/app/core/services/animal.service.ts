import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/Animal';



const addAnimal = 'http://localhost:5000/animal/create';
const getAllAnimals = 'http://localhost:5000/animal/all';
const getAnimalDetail = 'http://localhost:5000/animal/details/';
const getUserAnimals = 'http://localhost:5000/animal/user';
const deleteAnimal = 'http://localhost:5000/animal/delete/';



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

/*
createFurniture(data) {
    return this.http.post(createF , data);
  }

  getAllFurniture(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(getAllF);
  }

  getFurniture(id): Observable<Furniture> {
    return this.http.get<Furniture>(getFurnitureDetail + id);
  }

  getUserFurniture(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(getUserF);
  }

  deleteFurniture(id){
    return this.http.delete(deleteF + id);
  }
 

*/
}
