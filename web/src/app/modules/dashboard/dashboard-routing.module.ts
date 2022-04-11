import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@module/core/services/auth-guard.service';
import { AccountLayoutComponent } from 'app/_layout/account-layout/account-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard', component: AccountLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", component: DashboardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
