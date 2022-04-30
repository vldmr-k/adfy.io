import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from './logo/logo.module';
import { AccountModule } from './account/account.module';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { TuiDropdownHostModule } from '@taiga-ui/cdk';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    AccountModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
