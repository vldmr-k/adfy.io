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
  @Input()
  step: number = 0;

  @Output()
  changeStep: EventEmitter<number> = new EventEmitter<number>();

  steps = STEPPER_LIST;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.step = Number(params['step']);
        this.changeStep.emit(this.step)
    }
  );
  }

  isDisabled(stepIndex: number): boolean | null {
    const result: boolean = !(stepIndex <= this.step);
    return null;
    return result ? result : null;
  }
}
