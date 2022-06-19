import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { EffectsModule } from '@ngrx/effects';
import { MediaEffects } from '@store/effects/media.effects';
import { ItemModule } from '@file-manager/item/item.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ItemModule,
    EffectsModule.forFeature([MediaEffects])
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
