
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from '../interfaces/user-state';

// Selector functions
const getInstrumentFeatureState = createFeatureSelector<IUserState>('user');

export const getUser = createSelector(getInstrumentFeatureState, (state) => state.user);

