import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListModule } from './list/project-list.module';
import { ProjectDialogComponent } from './list/components/project-dialog/project-dialog.component';
import { project } from '@store/reducers';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ProjectListModule,
  ],
  bootstrap: [ProjectListComponent]
})
export class ProjectModule { }
