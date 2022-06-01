import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component';
import { TuiInputFilesModule } from '@taiga-ui/kit';


@NgModule({
  declarations: [
    UploaderComponent
  ],
  imports: [
    CommonModule,
    TuiInputFilesModule
  ],
  exports: [
    UploaderComponent
  ]
})
export class FileManagerUploaderModule { }
