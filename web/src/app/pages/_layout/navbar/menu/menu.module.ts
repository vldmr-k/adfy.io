import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';

import {MenuComponent} from './menu.component';

@NgModule({
    imports: [
      CommonModule,
      TuiLinkModule,
      RouterModule,
      TuiButtonModule,
    ],
    declarations: [MenuComponent],
    exports: [MenuComponent],
})
export class MenuModule {}
