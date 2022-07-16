import { ChangeDetectionStrategy, Component, inject, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { project, placement } from '@store/reducers';
import { projectActions, placementActions } from "@store/actions"
import * as grpc from "@grpc/placement/service";

import {Placement} from "@store/models"
import {Router} from "@angular/router";
import {ROUTER_PLACEMENT_UPDATE} from "@pages/placement/placement-routing.module";


interface ProjectFilter {
  title: string;
  id: string
}

@Component({
  selector: 'adfy-placement-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementListComponent implements OnInit {

  projectList$ = this.store.select(project.selectList)
  placementList$ = this.store.select(placement.selectList)

  constructor(
    @Inject(Store) private readonly store: Store,
    @Inject(Router) private readonly router: Router
  ) {
      this.store.dispatch(projectActions.listRequest());
      const req: grpc.ListRequest = {}
      this.store.dispatch(placementActions.listRequest({request: req}));
  }

  ngOnInit(): void {

  }

  onDeletePlacement(placement: Placement) {
    this.store.dispatch(placementActions.deleteRequest({request: {id: placement.id}}))
  }

  onEditPlacement(placement: Placement) {
      this.router.navigateByUrl(ROUTER_PLACEMENT_UPDATE.replace(":placementId", placement.id))
  }

}
