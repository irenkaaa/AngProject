import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/animal/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ContactComponent } from './components/dumbComponents/contact/contact.component';
import { AddAnimalComponent } from './components/animal/add-animal/add-animal.component';
import { DetailAnimalComponent } from './components/animal/detail-animal/detail-animal.component';
import { AboutComponent } from './components/dumbComponents/about/about.component';
import { AdoptAnimalComponent } from './components/animal/adopt-animal/adopt-animal.component';
import { EditAnimalComponent } from './components/animal/edit-animal/edit-animal.component';
import { ListUsersComponent } from './components/listing-users-and-adoptions/list-users/list-users.component';
import { ListAdoptionRequestsComponent } from './components/listing-users-and-adoptions/list-adoption-requests/list-adoption-requests.component';
import { HelpAnimalComponent } from './components/dumbComponents/help-animal/help-animal.component';

import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path:'', pathMatch: 'full', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'contact', component: ContactComponent },
  { path:'about', component: AboutComponent },
  { path:'animal/add', component: AddAnimalComponent, canActivate: [AdminGuard] },
  { path:'animal/details/:id', component: DetailAnimalComponent, canActivate: [AuthGuard] },
  { path:'animal/adopt/:id', component: AdoptAnimalComponent, canActivate: [AuthGuard] },
  { path:'animal/edit/:id', component: EditAnimalComponent, canActivate: [AdminGuard] },
  { path:'user/all', component: ListUsersComponent , canActivate: [AdminGuard]},
  { path: 'adoption-requests', component: ListAdoptionRequestsComponent,  canActivate: [AdminGuard]},
  { path: 'animal/help', component: HelpAnimalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
