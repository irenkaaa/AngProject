import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactComponent } from './components/shared/contact/contact.component';


import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { SuccessInterceptor } from './core/interceptors/success.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/services/auth.service';
import { AnimalService } from './core/services/animal.service';
import { UserService } from './core/services/user.service';
import { AddAnimalComponent } from './components/animal/add-animal/add-animal.component';
import { ListAnimalsComponent } from './components/animal/list-animals/list-animals.component';
import { SingleAnimalComponent } from './components/animal/single-animal/single-animal.component';
import { DetailAnimalComponent } from './components/animal/detail-animal/detail-animal.component';
import { AboutComponent } from './components/about/about.component';
import { AdoptAnimalComponent } from './components/animal/adopt-animal/adopt-animal.component';
import { EditAnimalComponent } from './components/animal/edit-animal/edit-animal.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListAdoptionRequestsComponent } from './components/list-adoption-requests/list-adoption-requests.component';
import { HelpAnimalComponent } from './components/help-animal/help-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AddAnimalComponent,
    ListAnimalsComponent,
    SingleAnimalComponent,
    ContactComponent,
    DetailAnimalComponent,
    AboutComponent,
    AdoptAnimalComponent,
    EditAnimalComponent,
    ListUsersComponent,
    ListAdoptionRequestsComponent,
    HelpAnimalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [
    AuthService,
    AnimalService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
