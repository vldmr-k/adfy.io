import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule } from '@taiga-ui/core';
import { ProjectListComponent } from './project-list.component';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDialogComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiDialogModule
  ],
  exports: [
    ProjectListComponent
  ],
  entryComponents: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
