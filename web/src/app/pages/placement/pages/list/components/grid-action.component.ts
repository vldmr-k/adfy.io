import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {TUI_ARROW} from "@taiga-ui/kit";

const ACCOUNT_MENU_ITEMS = [
  {
    label: 'Edit ',
    routerLink: '/account/produle',
  },
  {
    label: 'Delete',
    routerLink: '/auth/logout',
  },
];

@Component({
  selector: 'adfy-placement-grid-action',
  template: `
    <button
      tuiIconButton
      appearance="flat"
      [size]="'s'"
      [tuiDropdownAlign]="'right'"
      [tuiDropdownContent]="content"
      [tuiDropdown]="dropdownOpen"
      (click)="onClick($event)"
      [pseudoHovered]="false"
      [pseudoPressed]="false"
      [iconRight]="icon"
    >
    </button>

    <ng-template #icon>
      <tui-svg src="tuiIconMoreVer"></tui-svg>
    </ng-template>
    <ng-template #content>
      <tui-data-list role="menu">
        <tui-opt-group>
          <a *ngFor="let item of menuItems" tuiOption [routerLink]="item.routerLink">
            {{item.label}}
          </a>
        </tui-opt-group>
      </tui-data-list>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementGridActionComponent {

  readonly arrowIcon = TUI_ARROW;

  dropdownOpen: boolean = false;

  menuItems = ACCOUNT_MENU_ITEMS;

  onClick(event: MouseEvent) {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onObscured(obscured: boolean) {
    if (obscured) {
      this.dropdownOpen = false;
    }
  }

  onActiveZone(active: boolean) {
    this.dropdownOpen = active && this.dropdownOpen;
  }
}
