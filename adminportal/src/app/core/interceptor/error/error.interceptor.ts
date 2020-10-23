import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private location: Location) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((response: HttpResponse<any>) => {
                if (response.body) {
                    if (response.body.error !== undefined) {
                        this.errorMessageAlert(
                            response.body.error.code,
                            response.body.error.text,
                            response.body.error.status,
                        );
                    }
                }
            }),
            catchError((err) => {
                if (err.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login failed ',
                        text: 'Invalid username or password!',
                        footer: `${err.statusText}`,
                    });
                }

                if (err.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed ',
                        text: `${err.error.error.text}`,
                        footer: `${err.error.error.status}`,
                    });
                }

                return throwError(err);
            }),
        );
    }

    public errorMessageAlert(codeError: number, errorText: string, errorStatus: string) {
        if (codeError === 400) {
            Swal.fire({
                icon: 'error',
                title: 'Error! failed ',
                text: `${errorText}`,
                footer: `${errorStatus}`,
            });
        }

        if (codeError === 401) {
      
        }

        if (codeError === 403) {
        
        }
        if (codeError === 500) {
        
        }
        if (codeError === 503) {
        
        }
    }
}


