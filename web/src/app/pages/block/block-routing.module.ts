import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlockBuilderComponent } from './builder/block-builder.component';


const routes: Routes = [
  {
    path: ':project/builder',
    component: BlockBuilderComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockRoutingModule {
}
