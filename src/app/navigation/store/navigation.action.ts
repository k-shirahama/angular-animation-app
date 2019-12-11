import {createAction, union} from '@ngrx/store';

export const onClickCategory = createAction(
  'Navigation onClickAction',
  (payload: number) => ({ payload }),
  );

const all = union({
  onClickCategory
});

export type NavigationActionUnion = typeof all;
