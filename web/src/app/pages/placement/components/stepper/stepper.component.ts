import { ChangeDetectionStrategy, Component, Input } from '@angular/core';



@Component({
  selector: 'adfy-placement-stepper',
  templateUrl: './stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepperComponent {
  @Input()
  currentStep: number = 0;
}
