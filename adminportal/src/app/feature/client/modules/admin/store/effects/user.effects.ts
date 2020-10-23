import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';


import * as userActions from '../actions/user.actions';
import { PortalSyncService } from '../../services/portal-sync.service';
import { IPortalSync } from '../../interfaces/responses/PortalSync';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: PortalSyncService
    ) { }

    @Effect()
    loaduser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.LoadUser),
        mergeMap(() =>
            this.userService.getPortalSync().pipe(
                map((data: IPortalSync) => {
                    return new userActions.LoadUserSuccess(data);
                }),
                catchError((err) => of(new userActions.LoadUserFail(err)))
            )
        )
    );

}
