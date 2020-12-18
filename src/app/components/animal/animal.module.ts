import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SingleAnimalComponent } from './single-animal/single-animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AdoptAnimalComponent } from './adopt-animal/adopt-animal.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AnimalRoutingModule } from './animal-routing.module';


@NgModule({
  declarations: [
      SingleAnimalComponent,
      AddAnimalComponent,
      AdoptAnimalComponent,
      DetailAnimalComponent,
      EditAnimalComponent,
      ListAnimalsComponent,
      HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AnimalRoutingModule
  ]
})
export class AnimalModule { }


