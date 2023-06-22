import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';

export const initialState: actions.validFilter = 'all' as actions.validFilter;

export const filterReducer = createReducer(
  initialState,
  on(actions.setFilter, (state, { filter }) => filter)
);
