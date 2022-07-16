import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { placementActions } from "@store/actions"
import {ActivatedRoute} from "@angular/router";
import {placement} from "@store/reducers";
import {Placement} from "@store/models"

@Component({
  selector: 'adfy-placement-edit-form',
  template: `
    <sf-form  class="tui-form tui-form--block"  [schema]="placement.metadata.schema!"
     [model]="model"></sf-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementEditFormComponent {

  @Input()
  placement!: Placement;

  model;

  get schema() {
    return this.placement ? this.placement.metadata?.schema : ""
  }



}
