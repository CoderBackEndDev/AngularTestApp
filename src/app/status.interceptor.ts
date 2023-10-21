import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,HttpErrorResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class StatusInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Check if the error status is 404 (Not Found) and handle it
        if (error.status === 404) {
          console.error('Error 404:', error.message);
          // Optionally, you can inform your application's UI or trigger some custom logic
          // For example, redirect to an error page, show a modal, etc.
        }

        // If it's not a 404 error, or you want to continue the error chain, rethrow the error.
        return throwError(error);
      })
    );
  }
}
