import { ChangeDetectionStrategy, Component, inject, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { project, placement } from '@store/reducers';
import { projectActions, placementActions } from "@store/actions"
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, startWith } from 'rxjs/operators';
import * as placementService from '@grpc/placement/service';
import * as projectService from '@grpc/project/service';

import { Project } from '@store/models';



@Component({
  selector: 'adfy-placement-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementListComponent implements OnInit {

  readonly form = new UntypedFormGroup({
    filters: new UntypedFormControl(),
  });

  readonly items: any[] = [];

  projectList$ = this.store.select(project.selectList)
  placementList$ = this.store.select(placement.selectList)

  constructor(
    @Inject(Store) private readonly store: Store,
  ) {
      this.store.dispatch(projectActions.listRequest())

  }

  ngOnInit(): void {
      this.projectList$
      .pipe(filter((projects) => projects !== null))
      .subscribe({
        next: (projects) => {
          projects?.forEach((value) => {
            this.items.push(value.name)
          })
        }
      })
  }

}
