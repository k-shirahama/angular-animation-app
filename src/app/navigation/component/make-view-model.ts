import {CategoryOpeningState, CategoryStatus} from './navigation.queries';
import {NavigationViewModel} from './navigation-view-model';

export function makeViewModel(
  features: CategoryStatus[],
  openingStates: CategoryOpeningState[]
): NavigationViewModel[] {
  return features.reduce((acc, current) => {
    const openingState = openingStates.find(
      v => v.categoryId === current.categoryId
    );
    if (openingState === undefined) {
      throw new Error('opening state not found');
    }

    return acc.concat([
      new NavigationViewModel({
        categoryId: current.categoryId,
        categoryLabel: current.categoryLabel,
        isOpening: openingState.isOpening
      })
    ]);
  }, [] as NavigationViewModel[]);
}
