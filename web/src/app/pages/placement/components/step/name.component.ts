import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'adfy-placement-step-name',
  template: `
        <tui-input [formControl]="name">
	        Placement name
	        <input 
	            tuiTextfield
	            type="email"
	        />
	    </tui-input>

        <button 
            tuiButton 
            type="button" appearance="secondary" class="tui-space_top-5" [disabled]="canNext$ | async"
            [routerLink]="['/placement/add']" 
            [queryParams]="{name: this.name.value, step: nextStep}"
            queryParamsHandling="merge"    
        >
	        Next &rarr;
	    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementStepNameComponent {
    name = new FormControl();

    nextStep: number = 1;

    canNext$ = new BehaviorSubject<boolean>(true)

    constructor(
        private route: ActivatedRoute
    ) {
        const name = String(this.route.snapshot.queryParamMap.get('name') || '');

        if(name) {
            this.name.setValue(name);
            this.updateCanNext();
        }

        this.name.valueChanges.subscribe({
            next: () => {
                this.updateCanNext()
            }
        })
    }

    updateCanNext() {
        this.canNext$.next(!(this.name.value.length > 0))
    }
}
