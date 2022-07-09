import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';

import * as grpc from '@grpc/media/service';
import * as grpcClient from '@grpc/media/service.client';

import { mediaActions } from '@store/actions/index';

import { Store } from '@ngrx/store';


@Component({
  selector: 'adfy-filemanager-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.less']
})
export class UploaderComponent implements OnInit {

  readonly control = new UntypedFormControl();
  rejectedFiles: readonly TuiFileLike[] = [];

  constructor(
    @Inject(TUI_IS_CYPRESS) readonly isCypress: boolean,
    @Inject(Store) private readonly store: Store,
    @Inject(grpcClient.MediaServiceClient) private readonly mediaServiceClient: grpcClient.MediaServiceClient
  ) {
  }

  ngOnInit() {
    let store = this.store;

    this.control.valueChanges.subscribe({
      next: (files) => {
        for(let i in files) {
          let file: File = files[i];

          if (file) {

            file.arrayBuffer().then(buff => {
              let request: grpc.UploadRequest = {
                name: file.name,
                body: new Uint8Array(buff)
              }

              this.mediaServiceClient.upload(request)

            })
          }

        }
      }
    })
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
      this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({name}: File): void {
      this.control.setValue(
          this.control.value.filter((current: File) => current.name !== name),
      );
  }

  clearRejected({name}: TuiFileLike): void {
      this.rejectedFiles = this.rejectedFiles.filter(
          rejected => rejected.name !== name,
      );
  }

  uploadFiles() {}

}
