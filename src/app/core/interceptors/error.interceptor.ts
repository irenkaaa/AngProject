import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router:Router,private toastr:ToastrService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req).pipe(catchError((err:HttpErrorResponse)=>{
            if(err.status === 401) {
                this.toastr.error(err.error.message, 'Error');
                this.router.navigate(['/login']);
            }
            return throwError(err);
        }));
    }
}