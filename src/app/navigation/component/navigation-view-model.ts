import {CategoryStatus} from './navigation.queries';

export class NavigationViewModel {
  readonly categoryId: number;
  readonly categoryLabel: string;
  readonly isOpening: boolean;

  constructor(params: CategoryStatus) {
    this.categoryId = params.categoryId;
    this.categoryLabel = params.categoryLabel;
    this.isOpening = params.isOpening;
  }
}
