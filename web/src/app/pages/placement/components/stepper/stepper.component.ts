import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const STEPPER_LIST = [
    {
        index: 0,
        label: "Select Template"
    },
    {
        index: 1,
        label: "Select Area"
    },
    {
        index: 2,
        label: "Create Placement"
    }
];

@Component({
  selector: 'adfy-placement-stepper',
  templateUrl: './stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepperComponent implements OnInit {
  step: number = 0;

  @Output()
  changeStep: EventEmitter<number> = new EventEmitter<number>();

  steps = STEPPER_LIST;

  constructor(
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params => {
        this.step = Number(params['step']) || 0;
        this.changeStep.emit(this.step)
    })
  }

  ngOnInit(): void {
    
    this.step = Number(this.route.snapshot.queryParamMap.get('step') || 0)
    this.changeStep.emit(this.step);
  }


  isDisabled(stepIndex: number): boolean | null {
    const result: boolean = !(stepIndex <= this.step);
    return result ? result : null;
  }
}
