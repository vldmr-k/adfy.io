import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core";
import {TUI_ARROW} from "@taiga-ui/kit";
import {Placement} from "@store/models";
import {ROUTER_PLACEMENT_UPDATE} from "@pages/placement/placement-routing.module";




@Component({
  selector: 'adfy-placement-grid-column-action',
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
          <a tuiOption (click)="onHandleEdit($event)">
            Edit
          </a>
          <a tuiOption (click)="onHandleDelete($event)">
            Delete
          </a>
        </tui-opt-group>
      </tui-data-list>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementGridColumnActionComponent {

  readonly arrowIcon = TUI_ARROW;

  dropdownOpen: boolean = false;

  @Input()
  placement!: Placement

  @Output()
  deleteAction = new EventEmitter<Placement>();

  @Output()
  editAction = new EventEmitter<Placement>();

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

  get editLink(): string {
    return '/' + ROUTER_PLACEMENT_UPDATE.replace(":placementId", this.placement.id)
  }

  onHandleDelete(event: MouseEvent) {
    this.deleteAction.emit(this.placement);
  }

  onHandleEdit(event: MouseEvent) {
    this.editAction.emit(this.placement);
  }
}
