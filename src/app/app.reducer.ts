import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducers';
import { filterReducer } from './todos/filter/filter.reducers';
import { validFilter } from './todos/filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: validFilter;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
