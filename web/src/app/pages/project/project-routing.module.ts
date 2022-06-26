import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesLayoutComponent } from '@pages/_layout/pages-layout.component';
import { ProjectListComponent } from './list/project-list.component';

export const ROUTE_PROJECT_LIST = 'project/list';

const routes: Routes = [
  {
    path: ROUTE_PROJECT_LIST,
    component: ProjectListComponent,
    pathMatch: 'full'
  },
  { path: '', redirectTo: ROUTE_PROJECT_LIST, pathMatch: 'full',},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {
}
