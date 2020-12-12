import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { AddAnimalComponent } from './components/animal/add-animal/add-animal.component';
import { DetailAnimalComponent } from './components/animal/detail-animal/detail-animal.component';
import { AboutComponent } from './components/about/about.component';
import { AdoptAnimalComponent } from './components/animal/adopt-animal/adopt-animal.component';
import { EditAnimalComponent } from './components/animal/edit-animal/edit-animal.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'contact', component: ContactComponent },
  { path:'about', component: AboutComponent },
  { path:'animal/add', component: AddAnimalComponent },
  { path:'animal/details/:id', component: DetailAnimalComponent },
  { path:'animal/adopt/:id', component: AdoptAnimalComponent },
  { path:'animal/edit/:id', component: EditAnimalComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
