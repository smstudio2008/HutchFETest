import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    public intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('user-token');
        const appVersion: string = localStorage.getItem('app-version');
        const dataVersion: string = localStorage.getItem('data-version');

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${token}`,
                    AppVersion: appVersion,
                    DataVersion: dataVersion,
                },
            });
        }

        return next.handle(request);
    }
}
