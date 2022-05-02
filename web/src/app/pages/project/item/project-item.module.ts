import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { ProjectItemAddComponent } from './project-item-add.component';

@NgModule({
  declarations: [
    ProjectItemComponent,
    ProjectItemAddComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiLinkModule
  ],
  exports: [
    ProjectItemAddComponent,
    ProjectItemComponent
  ]
})
export class ProjectItemModule { }
