import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private location: Location) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((response: HttpResponse<any>) => {
                if (response.status === 200) {
                    return response;
                }
            }),
            catchError((err) => {
                if (err.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login failed ',
                    });
                }

                if (err.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed ',
                    });
                }
                if (err.status === 500) {
                    Swal.fire({
                        icon: 'error',
                        title: 'failed ',
                    });
                }

                if (err.status === 503) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed ',
                    });
                }

                return throwError(err);
            })
        );
    }
}
