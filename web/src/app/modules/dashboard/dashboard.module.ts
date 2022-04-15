import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountLayoutComponent } from 'app/_layout/account-layout/account-layout.component';
import { CoreModule } from '@module/core/core.module';
import {TuiLoaderModule} from '@taiga-ui/core';


@NgModule({
  declarations: [
    AccountLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    DashboardRoutingModule,
    TuiLoaderModule
  ]
})
export class DashboardModule { }
