import {Observable} from 'rxjs';
import {State, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {getMenuList} from '../store/navigation.reducer';
import {map, shareReplay} from 'rxjs/operators';
import {makeViewModel} from './make-view-model';
import {CategoryStatusListMock} from './category-status-mock';

export interface CategoryStatus {
  categoryId: number;
  categoryLabel: string;
  isOpening: boolean;
}

export interface CategoryOpeningState {
  categoryId: number;
  isOpening: boolean;
}

@Injectable({ providedIn: 'root' })
export class NavigationQueries {
  readonly categoryOpeningStatus$: Observable<CategoryStatus[]>;

  constructor(store: Store<State<any>>) {
    this.categoryOpeningStatus$ = store.pipe(
      getMenuList,
      map(v => {
        return makeViewModel(CategoryStatusListMock, v.categoryOpeningState);
      }),
      shareReplay(1)
    );
  }
}
