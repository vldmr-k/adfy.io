import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { placementActions } from "@store/actions"
import {ActivatedRoute} from "@angular/router";
import {placement} from "@store/reducers";

@Component({
  selector: 'adfy-placement-update',
  templateUrl: './update.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementUpdateComponent {

  placement$ = this.store.select(placement.selectPlacement)

  constructor(
    @Inject(Store) protected readonly store: Store,
    private route: ActivatedRoute
  ) {
    const id = String(this.route.snapshot.paramMap.get('placementId'));
    this.store.dispatch(placementActions.getRequest({request: { id : id } }))
  }

}
