import { ChangeDetectionStrategy, Component, inject, Inject, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { project, placement } from '@store/reducers';
import { projectActions, placementActions } from "@store/actions"
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, startWith } from 'rxjs/operators';
import * as placementService from '@grpc/placement/service';
import * as projectService from '@grpc/project/service';

import { Project } from '@store/models';
import { TuiIdentityMatcher } from '@taiga-ui/cdk';
import * as grpc from "@grpc/placement/service";


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
  ) {
      this.store.dispatch(projectActions.listRequest());
      const req: grpc.ListRequest = {}
      this.store.dispatch(placementActions.listRequest({request: req}));
  }

  ngOnInit(): void {

  }

}
