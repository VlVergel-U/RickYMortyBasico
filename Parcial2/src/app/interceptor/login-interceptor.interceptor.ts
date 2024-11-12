import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const loginInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  let data = req;
  if (localStorage.getItem("token")) {
      data = req.clone({
          setHeaders: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
          }
      });
  }

  return next(data).pipe(catchError(generateError));

};

function generateError(error: HttpErrorResponse) {

  return throwError(() => new Error('Server Error'));

}