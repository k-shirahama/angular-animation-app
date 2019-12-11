import {createFeatureSelector, createReducer, createSelector, on, select} from '@ngrx/store';
import {NavigationActionUnion, onClickCategory} from './navigation.action';
import {pipe} from 'rxjs';
import {defaultCategoryOpeningStateMock} from './default-category-opening-state-mock';
import {CategoryOpeningState} from './category-opening-state';

interface NavigationState {
  categoryOpeningState: CategoryOpeningState[];
}

const initialState: NavigationState = {
  categoryOpeningState: defaultCategoryOpeningStateMock,
};

export const navigationFeatureName = 'navigationFeature';

export function navigationReducer(
  state_: NavigationState | undefined,
  action: NavigationActionUnion,
): NavigationState {
  const reducer_ = createReducer<NavigationState>(
    initialState,
    on(
      onClickCategory,
      (state, { payload }): NavigationState => {
        const categoryOpeningState = state.categoryOpeningState.map(v => {
          return v.categoryId === payload
            ? { ...v, isOpening: !v.isOpening }
            : v;
        });
        return { ...state, categoryOpeningState };
      },
    ),
  );
  return reducer_(state_, action);
}

const getFeature = createFeatureSelector<NavigationState>(navigationFeatureName);

export const getMenuList = pipe(
  select(
    createSelector(
      getFeature,
      v => {
        return {
          categoryOpeningState: v.categoryOpeningState,
        };
      },
    ),
  ),
);
