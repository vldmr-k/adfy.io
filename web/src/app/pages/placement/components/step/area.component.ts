import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetByProjectRequest, IdRequest } from '@grpc/area/service';
import { Store } from '@ngrx/store';
import { areaActions } from '@store/actions';
import { area } from "@store/reducers"



@Component({
  selector: 'adfy-placement-step-area',
  template: `
  
    <div class="tui-row" *ngIf="list$ | async as areas else loading ">
        <ng-container *ngFor="let area of areas; index as i">
            <div class="tui-col_md-4">
                <tui-island [size]="'l'" [hoverable]="true" [textAlign]="'left'" class="tui-space_bottom-9" 
                    [routerLink]="['/placement/add']" 
                    [queryParams]="{step: nextStep, areaId: area.id}"
                    queryParamsHandling="merge"
                >
                    <div class="tui-island__content" >
                        {{area.name}} ({{area.position}})
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
export class PlacementStepAreaComponent {

    list$ = this.store.select(area.selectList)

    nextStep: number = 3;

    constructor(
        @Inject(Store) private readonly store: Store,
        private route: ActivatedRoute
    ) {
        const projectId = String(this.route.snapshot.queryParamMap.get('projectId'));
        var id: IdRequest = { id: projectId }
        var req : GetByProjectRequest = {project: id}
        this.store.dispatch(areaActions.getByProjectRequest({request: req}))
    }
  
}
