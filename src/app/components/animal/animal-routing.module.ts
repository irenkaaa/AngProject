import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { AdoptAnimalComponent } from './adopt-animal/adopt-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { HelpAnimalComponent } from '../dumbComponents/help-animal/help-animal.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';

import { AuthGuard } from '../../core/guards/auth.guard';
import { AdminGuard } from '../../core/guards/admin.guard';

const animalRoutes: Route[] = [
    //{ path: '' , component: HomeComponent },
    { path: '', component: ListAnimalsComponent },
    { path: 'home', component: ListAnimalsComponent },
    
    //{ path:'home', component: HomeComponent },
    
    { path:'add', component: AddAnimalComponent, canActivate: [AdminGuard] },
    { path:'details/:id', component: DetailAnimalComponent, canActivate: [AuthGuard] },
    { path:'adopt/:id', component: AdoptAnimalComponent, canActivate: [AuthGuard] },
    { path:'edit/:id', component: EditAnimalComponent, canActivate: [AdminGuard] },
    { path: 'help', component: HelpAnimalComponent },
]

@NgModule({
    imports:[RouterModule.forChild(animalRoutes)],
    exports:[RouterModule]
})

export class AnimalRoutingModule {}