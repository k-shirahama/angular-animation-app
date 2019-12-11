import {Dispatcher} from '../../shared/dispatcher';
import {Injectable} from '@angular/core';
import { onClickCategory } from '../store/navigation.action';

@Injectable({providedIn: 'root'})
export class NavigationCommands {
  constructor(private readonly dispatcher: Dispatcher) {}

  onClickCategory(categoryId: number) {
    this.dispatcher.dispatch(onClickCategory(categoryId));
  }

}

