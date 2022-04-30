import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { ProjectListComponent } from './project-list.component';
import { ProjectItemModule } from '../item/project-item.module';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    ProjectItemModule
  ],
})
export class ProjectListModule { }
