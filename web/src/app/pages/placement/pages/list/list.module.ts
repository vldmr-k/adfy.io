import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlacementListFilterComponent} from "@pages/placement/pages/list/components/filter.component";
import {PlacementListComponent} from "@pages/placement/pages/list/list.component";
import {TuiButtonModule, TuiDataListModule, TuiDropdownModule, TuiLoaderModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiFilterModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";

import {PlacementGridColumnActionComponent} from "@pages/placement/pages/list/components/grid/column/action.component";
import {PlacementGridColumnStateComponent} from "@pages/placement/pages/list/components/grid/column/state.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    PlacementListComponent,
    PlacementListFilterComponent,
    PlacementGridColumnActionComponent,
    PlacementGridColumnStateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TuiLoaderModule,
    TuiFilterModule,
    TuiDataListModule,
    TuiSvgModule,

    TuiDropdownModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiDataListModule,

  ],
  exports: [
    PlacementListComponent
  ]
})
export class PlacementListModule { }
