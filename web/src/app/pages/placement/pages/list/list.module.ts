import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlacementListFilterComponent} from "@pages/placement/pages/list/components/filter.component";
import {PlacementListComponent} from "@pages/placement/pages/list/list.component";
import {TuiButtonModule, TuiDataListModule, TuiDropdownModule, TuiLoaderModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiFilterModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {PlacementGridActionComponent} from "@pages/placement/pages/list/components/grid-action.component";

@NgModule({
  declarations: [
    PlacementListComponent,
    PlacementListFilterComponent,
    PlacementGridActionComponent
  ],
  imports: [
    CommonModule,
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
