import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiInputTagModule, TuiIslandModule, TuiTagModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core';
import { ProjectListComponent } from './project-list.component';
import { ProjectDialogModule } from './project-dialog/project-dialog.module';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from '@store/effects';
import { ProjectItemModule } from './project-item/project-item.module';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectDialogModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiLoaderModule,
    TuiTagModule,
    TuiInputColorModule,
    ProjectItemModule
  ],
  exports: [
    ProjectListComponent,
  ]
})
export class ProjectListModule { }
