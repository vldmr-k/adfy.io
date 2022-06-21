import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';



@Component({
  selector: 'adfy-placement-add',
  templateUrl: './add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementAddComponent implements OnInit {

  projectId?: string;
  templateId?: string;
  areaId?: string;

  step: number = 0;

  params: object = {}

  constructor(
    @Inject(Store) private readonly store: Store,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

  }

  onChangeStep(step: number) {
    this.step = step;
  }
}
