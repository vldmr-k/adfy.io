import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiDataListModule, TuiDropdownModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';



@NgModule({
  imports: [
    CommonModule,
    TuiLinkModule,
    RouterModule,
    TuiDropdownModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiDataListModule,
    RouterModule,
  ],
  declarations: [
    AccountComponent
  ],
  exports: [AccountComponent],
})
export class AccountModule { }
