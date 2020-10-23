import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPortalSync } from '../interfaces/responses/PortalSync';

@Injectable({
    providedIn: 'root',
})
export class PortalSyncService {
    private readonly USER_URL: string =
        'https://run.mocky.io/v3/6a693531-8771-4adc-a69f-1cf66b84528c';

    constructor(private http: HttpClient) {}

    public getPortalSync(): Observable<IPortalSync> {
        return this.http.get<IPortalSync>(`${this.USER_URL}`).pipe(
            map((data) => {
                return data;
            }),
            catchError(this.handleError)
        );
    }

    private handleError(err): Observable<never> {
        let errorMessage: string;

        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }

        return throwError(errorMessage);
    }
}
