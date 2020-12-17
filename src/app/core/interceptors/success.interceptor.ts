import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { } from 'rxjs';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(tap((success)=>{

            if(success instanceof HttpResponse){
              if(success.url.startsWith('login') || success.url.startsWith('register') || success.url.startsWith('create') || success.url.includes('delete')
              || success.url.includes('promote') || success.url.includes('adopt')) {
                this.toastr.success(success.body.message,'Success');
              }
            }
          }), catchError((err)=> {
            this.toastr.error(err.error.message, 'Error');
            throw err;      
          }) 
        )}    
      }
      
            
            
            
            /*tap((event: HttpResponse<any>) => {
            if (event instanceof HttpResponse && (event.status === 201 || event.status === 200) && ()) {
                this.toastr.success(event.body.message, 'Success');
            }

        }))
    }
}*/
