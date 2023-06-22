import { createAction, props } from '@ngrx/store';

// enum?
export type validFilter = 'all' | 'active' | 'completed';

export const setFilter = createAction(
  '[Todo Filter] Set Filter',
  props<{ filter: validFilter }>()
);
