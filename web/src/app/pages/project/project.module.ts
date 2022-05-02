import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectItemModule } from './item/project-item.module';
import { ProjectListModule } from './list/project-list.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ProjectItemModule,
    ProjectListModule
  ],
  bootstrap: [ProjectListComponent]
})
export class ProjectModule { }
