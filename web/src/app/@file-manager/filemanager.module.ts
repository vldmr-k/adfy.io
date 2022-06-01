import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './filemanager.component';
import { ListModule } from './list/list.module';
import {TuiInputFilesModule} from '@taiga-ui/kit';
import { FileManagerUploaderModule } from './uploader/uploader.module';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { FILEMANAGER_PROVIDER } from './filemanager.service';



@NgModule({
  declarations: [
    FileManagerComponent,
  ],
  imports: [
    CommonModule,
    PolymorpheusModule,
    ListModule,
    TuiInputFilesModule,
    FileManagerUploaderModule,
  ],
  providers: [FILEMANAGER_PROVIDER],
  exports: [
    FileManagerComponent
  ]
})
export class FileManagerModule { }
