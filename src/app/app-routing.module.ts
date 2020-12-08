import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { AddAnimalComponent } from './components/animal/add-animal/add-animal.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'contact', component: ContactComponent },
  { path:'add', component: AddAnimalComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
