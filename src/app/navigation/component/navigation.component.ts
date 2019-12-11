import { Component } from '@angular/core';
import { NavigationCommands } from './navigation-commands';
import { NavigationQueries } from './navigation.queries';
import {NavigationViewModel} from './navigation-view-model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(
    public readonly queries: NavigationQueries,
    private readonly commands: NavigationCommands
  ) {}

  onClickCategory(categoryId: number) {
    this.commands.onClickCategory(categoryId);
  }

  trackByViewModels(_: number, item: NavigationViewModel): number {
    console.log(_);
    console.log(item);
    return item.categoryId;
  }
}
