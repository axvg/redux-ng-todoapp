import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('Lorem Ipsum')];

export const todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [... state, new Todo(text)]),
);