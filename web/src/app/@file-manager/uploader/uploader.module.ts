import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component';
import { TuiFilesModule, TuiInputFilesModule } from '@taiga-ui/kit';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UploaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputFilesModule,
    TuiFilesModule
  ],
  exports: [
    UploaderComponent
  ]
})
export class FileManagerUploaderModule { }
