import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('Lorem Ipsum')];

export const todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggleTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }),
  on(actions.updateTodo, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
  }),
  on(actions.deleteTodo, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),
  on(actions.toggleAll, (state) => {
    return state.map((todo) => {
      return { ...todo, completed: !todo.completed };
    });
  }),
  on(actions.deleteCompletedTodos, (state) => {
    return state.filter((todo) => !todo.completed);
  }),
)
