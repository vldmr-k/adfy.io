import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ROUTER_PLACEMENT_LIST } from '@pages/placement/placement-routing.module';
import { ROUTE_PROJECT_LIST } from '@pages/project/project-routing.module';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

const MENU_ITEMS = [
  {
    label: "Placement",
    url: ROUTER_PLACEMENT_LIST
  },
  {
    label: "Project",
    url: ROUTE_PROJECT_LIST
  },
  {
    label: "Area",
    url: "#"
  },
  {
    label: "Media Manager",
    url: "#"
  }
]

@Component({
    selector: 'adfy-navbar-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menuItems = MENU_ITEMS
}
