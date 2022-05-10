import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiInputTagModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { ProjectListComponent } from './project-list.component';
import { ProjectDialogModule } from './components/project-dialog/project-dialog.module';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from '@store/effects';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectDialogModule,
    TuiIslandModule,
    TuiButtonModule,
    EffectsModule.forFeature([ProjectEffects])
  ],
  exports: [
    ProjectListComponent,
  ]
})
export class ProjectListModule { }
