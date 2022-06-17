import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesLayoutComponent } from '@pages/_layout/pages-layout.component';
import { ProjectListComponent } from './list/project-list.component';

export const PROJECT_LIST = '/project/list';

const routes: Routes = [
  {
    path: 'list',
    component: ProjectListComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {
}
