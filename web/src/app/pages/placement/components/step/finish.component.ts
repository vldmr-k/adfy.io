import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { templateActions } from '@store/actions';
import { template } from "@store/reducers"



@Component({
  selector: 'adfy-placement-step-finished',
  template: `
    Finished
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepFinishComponent {

}
