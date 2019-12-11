import {Action, State, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class Dispatcher {
  constructor(private store: Store<State<any>>) {}

  dispatch<V extends Action = Action>(action: V) {
    this.store.dispatch(action);
  }
}
