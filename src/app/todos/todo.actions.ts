import { createAction, props } from "@ngrx/store";

export const createTodo = createAction('[Todo] Create Todo', props<{text: string}>());
export const updateTodo = createAction('[Todo] Update Todo', props<{id: number, text: string}>());
export const toggleTodo = createAction('[Todo] Toggle Todo', props<{id: number}>());