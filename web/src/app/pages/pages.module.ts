import { NgModule, OnInit } from '@angular/core';
import { PagesLayoutComponent } from './_layout/pages-layout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { meRequest } from '@store/actions/user.actions';
import { selectErrorResponse, userFeature } from '@store/reducers/user.reducer';
import { TuiAlertModule, TuiDialogModule, TuiLinkModule, TuiRootModule } from '@taiga-ui/core';
import { NavbarComponent } from './_layout/navbar/navbar.component';

import { TUI_DOC_LOGO } from '@taiga-ui/addon-doc';
import {LOGO_CONTENT} from './_layout/navbar/logo/logo.component';
import { PagesLayoutModule } from './_layout/pages-layout.module';
import { NavbarModule } from './_layout/navbar/navbar.module';
import { projectFeature } from '@store/reducers/project.reducer';

@NgModule({
  imports: [
    PagesRoutingModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    PagesLayoutModule,
    NavbarModule,

    StoreModule.forFeature(userFeature)
  ],
  declarations: [
    PagesLayoutComponent,
  ],
  providers: [
    {
      provide: TUI_DOC_LOGO,
      useValue: LOGO_CONTENT,
    }
  ]
})

export class PagesModule {
  constructor(
    private readonly store: Store
    ) {
    this.store.dispatch(meRequest())
  }

  handlerErrorAuthenticate() {

  }
}

