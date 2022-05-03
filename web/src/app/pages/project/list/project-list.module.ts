import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiInputTagModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule, TuiErrorModule } from '@taiga-ui/core';
import { ProjectListComponent } from './project-list.component';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiValidatorModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiDialogModule,
    TuiInputModule,
    TuiValidatorModule,
    TuiErrorModule,
    TuiInputTagModule
  ],
  exports: [
    ProjectListComponent
  ],
  entryComponents: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
