import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListAdoptionRequestsComponent } from './list-adoption-requests/list-adoption-requests.component';


@NgModule({
  declarations: [
    ListAdoptionRequestsComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ListUsersAndAdoptionsModule { }


