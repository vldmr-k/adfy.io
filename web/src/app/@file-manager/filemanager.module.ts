import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './filemanager.component';
import { ListModule } from './list/list.module';
import {TuiInputFilesModule} from '@taiga-ui/kit';
import { FileManagerUploaderModule } from './uploader/uploader.module';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { FILEMANAGER_PROVIDER } from './filemanager.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDialogModule, TuiLoaderModule } from '@taiga-ui/core';
import { mediaFeature } from '@store/reducers/media.reducer';
import { StoreModule } from '@ngrx/store';



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
    TuiDialogModule,
    TuiLoaderModule,
    StoreModule.forFeature(mediaFeature)
  ],
  providers: [FILEMANAGER_PROVIDER],
  exports: [
    FileManagerComponent
  ]
})
export class FileManagerModule { }
