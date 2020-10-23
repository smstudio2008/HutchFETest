import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//     constructor(private injector: Injector) {}

//     public intercept(
//         request: HttpRequest<any>,
//         next: HttpHandler
//     ): Observable<HttpEvent<any>> {
//         // add authorization header with basic auth credentials if available
//         // this.authenticationService = this.injector.get(AuthService);
//         // this.encryptionService = this.injector.get(EncryptionService);

//         // const token: string = this.authenticationService.getToken();

//         // if (token) {
//         //     const deEncryptToken = this.encryptionService.deEncryptValues(token, 'token');
//         //     request = request.clone({
//         //         setHeaders: {
//         //             Authorization: `Basic ${deEncryptToken}`,
//         //             AppVersion: environment.appVersion,
//         //             DataVersion: environment.dataVersion,
//         //         },
//         //     });
//         // }

//         return next.handle(request);
//     }
// }
