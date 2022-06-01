import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item.component';
import { TuiIslandModule, TuiTagModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDataListModule, TuiDropdownModule, TuiHostedDropdownModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { ProjectItemDummyComponent } from './project-dummy.component';
import { TuiActiveZoneModule, TuiDropdownHostModule } from '@taiga-ui/cdk';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProjectItemComponent,
    ProjectItemDummyComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiTagModule,
    TuiLinkModule,
    TuiDropdownModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiActiveZoneModule
  ],
  exports: [
    ProjectItemComponent,
    ProjectItemDummyComponent
  ]
})
export class ProjectItemModule { }
