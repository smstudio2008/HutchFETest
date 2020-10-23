import { Action } from '@ngrx/store';

export enum UserActionTypes {
    LoadUser = '[ User] Load',
    LoadUserSuccess = '[User] Load Success',
    LoadUserFail = '[User] Load Fail',
}

/************** Load: NGRX Actions to Load **************/
export class LoadUser implements Action {
    readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionTypes.LoadUserSuccess;

    constructor(public payload: any) {}
}

export class LoadUserFail implements Action {
    readonly type = UserActionTypes.LoadUserFail;

    constructor(public payload: string) {}
}

// Union the valid types
export type UserActions = LoadUser | LoadUserFail | LoadUserSuccess;
