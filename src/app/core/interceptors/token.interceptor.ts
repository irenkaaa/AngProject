import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService:AuthService, private toastr:ToastrService){}
    intercept(req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>>{
        let token = this.authService.token;
        
        let jsonReq = req.clone({
            setHeaders: {
              "Authorization": `Bearer ${token}`
            }
        });

        return next.handle(jsonReq).pipe(tap((event:HttpEvent<any>)=>{
            if(event instanceof HttpResponse && req.url.endsWith('register')) {
                this.toastr.success('Succesfull registration', 'Success');
                this.authService.saveUserInfo(event.body);
            }
        }));
    }
}
