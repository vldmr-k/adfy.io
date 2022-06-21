import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetByProjectRequest, IdRequest } from '@grpc/area/service';
import { Store } from '@ngrx/store';
import { areaActions } from '@store/actions';
import { area } from "@store/reducers"



@Component({
  selector: 'adfy-placement-step-area',
  template: `
    Area 
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepAreaComponent {

    areas$ = this.store.select(area.selectList)

    constructor(
        @Inject(Store) private readonly store: Store,
        private route: ActivatedRoute
    ) {

        const projectId = String(this.route.snapshot.queryParamMap.get('projectId'));

        var id: IdRequest = {id: projectId}
        var req : GetByProjectRequest = {project: id}

        this.store.dispatch(areaActions.getByProjectRequest({request: req}))
    }
  
}
