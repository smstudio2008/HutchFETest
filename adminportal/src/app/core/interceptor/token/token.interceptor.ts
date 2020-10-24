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
    constructor(private injector: Injector) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const token: string = this.authenticationService.getToken();

        // if (token) {

        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Basic ${deEncryptToken}`,
        //             AppVersion: environment.appVersion,
        //             DataVersion: environment.dataVersion,
        //         },
        //     });
        // }

        return next.handle(request);
    }
}
