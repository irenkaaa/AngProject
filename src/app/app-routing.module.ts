import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/animal/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ContactComponent } from './components/dumbComponents/contact/contact.component';
import { AboutComponent } from './components/dumbComponents/about/about.component';
import { ListUsersComponent } from './components/listing-users-and-adoptions/list-users/list-users.component';
import { ListAdoptionRequestsComponent } from './components/listing-users-and-adoptions/list-adoption-requests/list-adoption-requests.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path:'', pathMatch: 'full', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'contact', component: ContactComponent },
  { path:'about', component: AboutComponent },
  { path: 'animal', loadChildren: './components/animal/animal-routing.module#AnimalRoutingModule' },
  { path:'user/all', component: ListUsersComponent , canActivate: [AdminGuard]},
  { path: 'adoption-requests', component: ListAdoptionRequestsComponent,  canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
