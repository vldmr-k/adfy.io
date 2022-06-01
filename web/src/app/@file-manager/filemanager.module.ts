import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './filemanager.component';
import { ListModule } from './list/list.module';
import {TuiInputFilesModule} from '@taiga-ui/kit';
import { FileManagerUploaderModule } from './uploader/uploader.module';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { FILEMANAGER_PROVIDER } from './filemanager.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDialogModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    FileManagerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorpheusModule,
    ListModule,
    TuiInputFilesModule,
    FileManagerUploaderModule,
    TuiDialogModule
  ],
  providers: [FILEMANAGER_PROVIDER],
  exports: [
    FileManagerComponent
  ]
})
export class FileManagerModule { }
