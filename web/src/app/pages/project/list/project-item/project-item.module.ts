import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item.component';
import { TuiIslandModule, TuiTagModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { ProjectItemDummyComponent } from './project-dummy.component';



@NgModule({
  declarations: [
    ProjectItemComponent,
    ProjectItemDummyComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiTagModule
  ],
  exports: [
    ProjectItemComponent,
    ProjectItemDummyComponent
  ]
})
export class ProjectItemModule { }
