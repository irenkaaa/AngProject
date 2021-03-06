import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { SuccessInterceptor } from './core/interceptors/success.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/services/auth.service';
import { AnimalService } from './core/services/animal.service';
import { UserService } from './core/services/user.service';
import { SharedModule } from './components/shared/shared.module';
import { DumbComponentsModule } from './components/dumbComponents/dumbComp.module';
import { AnimalModule } from './components/animal/animal.module';
import { ListUsersAndAdoptionsModule } from './components/listing-users-and-adoptions/list-users-and-adoptions.module';
import { AuthenticationModule } from './components/authentication/authentication.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    DumbComponentsModule,
    AnimalModule,
    ListUsersAndAdoptionsModule,
    AuthenticationModule
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
