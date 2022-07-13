import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import { Placement } from "@store/models";

@Component({
  selector: 'adfy-placement-grid-column-state',
  template: `
    <ng-container *ngIf="placement.state === false">
      <tui-svg
        src="tuiIconPause"
        title="Playing"
        class="icon icon-pause"
      ></tui-svg>
    </ng-container>

    <ng-container *ngIf="placement.state === true">
      <tui-svg
        src="tuiIconPlay"
        title="Paused"
        class="icon icon-play"
      ></tui-svg>
    </ng-container>
  `,
  styles: ['.icon-play {color: var(--tui-success-fill)} .icon-pause {color: var(--tui-error-fill)}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementGridColumnStateComponent {

  @Input()
  placement!: Placement

}
