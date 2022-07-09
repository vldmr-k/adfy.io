import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { templateActions } from '@store/actions';
import { template } from "@store/reducers"



@Component({
  selector: 'adfy-placement-step-template',
  template: `

    <div class="tui-row" *ngIf="list$ | async as templates else loading ">
        <ng-container *ngFor="let template of templates; index as i">
            <div class="tui-col_md-4">
                <tui-island [size]="'l'" [hoverable]="true" [textAlign]="'left'" class=" tui-space_bottom-9" 
                [routerLink]="['/placement/add']" 
                [queryParams]="{step: nextStep, templateId: template.id}"
                queryParamsHandling="merge"
                >
                    <div class="tui-island__content" >
                        {{template.name}}
                    </div>
                </tui-island>
            </div>
        </ng-container>
    </div>
    <ng-template #loading>
        <tui-loader class="inline-flex tui-space_right-2" [showLoader]="true" [inheritColor]="true" [overlay]="true">
        </tui-loader>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepTemplateComponent {

    list$ = this.store.select(template.selectList)

    nextStep: number = 2;

    constructor(
        @Inject(Store) private readonly store: Store
    ) {
        this.store.dispatch(templateActions.listRequest())
    }

  
}
