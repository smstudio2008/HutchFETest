import { UserActions, UserActionTypes } from '../actions/user.actions';
import { IUserState } from '../interfaces/user-state';

export const initialState: IUserState  = {
    user: null
};

export function userReducer( state = initialState, action: UserActions): any {
    switch (action.type) {
        case UserActionTypes.LoadUserSuccess:
            return {
                ...state,
                user: action.payload,
            };

        case UserActionTypes.LoadUserFail:
            return {
                ...state,
                user: [],
            };

        default:
            return state;
    }
}
