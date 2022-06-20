import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { templateActions } from '@store/actions';
import { template } from "@store/reducers"



@Component({
  selector: 'adfy-placement-step-template',
  template: `
    Template

    {{ templates$ | async }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepTemplateComponent {

    templates$ = this.store.select(template.selectList)

    constructor(
        @Inject(Store) private readonly store: Store
    ) {
        this.store.dispatch(templateActions.listRequest())
    }
  
}
