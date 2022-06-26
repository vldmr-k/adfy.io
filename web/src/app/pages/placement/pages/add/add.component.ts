import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';



@Component({
  selector: 'adfy-placement-add',
  templateUrl: './add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementAddComponent {

  projectId?: string;
  templateId?: string;
  areaId?: string;

  step$ = new Observable<number>();

  // Create a new BehaviorSubject with an initial value of []
  stepSubject$ = new BehaviorSubject<number>(0);

  stepObserver$ = this.stepSubject$.asObservable()

  params: object = {}

  constructor(
    @Inject(Store) private readonly store: Store,
    private route: ActivatedRoute
  ) {

  }


  onChangeStep(newStep: number) {
    this.stepSubject$.next(newStep);
  }

}
