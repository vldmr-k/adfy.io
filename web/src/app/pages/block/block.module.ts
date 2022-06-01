import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockBuilderModule } from './builder/block-builder.module';
import { BlockRoutingModule } from './block-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlockRoutingModule,
    BlockBuilderModule
  ]
})
export class BlockModule { }
