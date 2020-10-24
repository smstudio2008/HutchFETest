import { environment } from './../../../environments/environment.prod';
import { ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { State } from './app.state';
import { routerReducer} from '@ngrx/router-store';

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['user'] })(reducer);
}

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];