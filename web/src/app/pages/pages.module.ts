import { NgModule } from '@angular/core';
import { PagesLayoutComponent } from './_layout/pages-layout.component';
import { PagesRoutingModule } from './pages-routing.module';
@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    PagesLayoutComponent,
  ],
})
export class PagesModule {
}

