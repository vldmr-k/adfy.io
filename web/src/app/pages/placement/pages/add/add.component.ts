import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';



@Component({
  selector: 'adfy-placement-add',
  templateUrl: './add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementAddComponent {

  projectId?: string;
  templateId?: string;
  areaId?: string;

  currentStep: number = 1;

  constructor(
    @Inject(Store) private readonly store: Store
  ) {

  }
}
