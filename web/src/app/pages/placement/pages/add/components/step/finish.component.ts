import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdRequest } from '@grpc/area/service';
import { CreateRequest } from '@grpc/placement/service';
import { Store } from '@ngrx/store';
import { ROUTER_PLACEMENT_UPDATE } from '@pages/placement/placement-routing.module';
import { areaActions, placementActions, projectActions, templateActions } from '@store/actions';
import { Placement } from '@store/models';
import { template, area, project, placement } from "@store/reducers"
import { combineLatest, forkJoin } from 'rxjs';
import { filter, tap } from 'rxjs/operators';



@Component({
    selector: 'adfy-placement-step-finished',
    template: `

        <tui-loader class="inline-flex tui-space_right-2" [showLoader]="true" [inheritColor]="true" [overlay]="true">
        </tui-loader>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepFinishComponent implements OnInit {

    name: string = ""

    area$ = this.store.select(area.selectArea)
    template$ = this.store.select(template.selectTemplate)
    project$ = this.store.select(project.selectProject)
    placement$ = this.store.select(placement.selectPlacement)

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        @Inject(Store) private readonly store: Store
    ) { }

    ngOnInit(): void {

        var map = this.route.snapshot.queryParamMap

        const areaId: string = String(map.get("areaId"));
        const templateId: string = String(map.get("templateId"));
        const projectId: string = String(map.get("projectId"))
        const name: string = String(map.get("name"));

        this.store.dispatch(areaActions.getRequest({ request : { id: areaId } }))
        this.store.dispatch(templateActions.getRequest({request : { id: templateId }}))
        this.store.dispatch(projectActions.getRequest({request : { id: projectId }}))


        combineLatest([this.area$, this.template$, this.project$])
            .pipe(filter(([area, template, project]) => area !== null && template !== null && project !== null))
            .subscribe({
                next: ([area, template, project]) => {
                    var placement : Placement = {
                        id: '',
                        name: name,
                        area: area!,
                        template: template!,
                        project: project!,
                        state: false
                    }

                    var request : CreateRequest = {
                        placment: placement
                    }

                    this.store.dispatch(placementActions.createRequest({request: request}))
                }
            })

        this.placement$
            .pipe(filter((placement) => placement !== null))
            .subscribe({
                next: (placement) => {
                    this.router.navigateByUrl(ROUTER_PLACEMENT_UPDATE.replace(':placementId', placement!.id));
                }
            })

    }
}
