import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiInputTagModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule, TuiErrorModule, TuiHintControllerModule, TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ProjectDialogComponent } from './project-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiValidatorModule } from '@taiga-ui/cdk';

import { StoreModule } from '@ngrx/store';
import { projectFeature } from '@store/reducers/project.reducer';


@NgModule({
  declarations: [
    ProjectDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiDialogModule,
    TuiInputModule,
    TuiValidatorModule,
    TuiErrorModule,
    TuiInputTagModule,
    TuiHintModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
    StoreModule.forFeature(projectFeature)

  ],
  exports: [
    ProjectDialogComponent,
  ]
})
export class ProjectDialogModule { }
