import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';



@Component({
  selector: 'adfy-placement-update',
  templateUrl: './update.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementUpdateComponent {}
