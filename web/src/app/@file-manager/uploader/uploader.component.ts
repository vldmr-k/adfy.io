import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';

import * as grpc from '@grpc/media/service';


@Component({
  selector: 'adfy-filemanager-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.less']
})
export class UploaderComponent {

  readonly control = new FormControl();
  rejectedFiles: readonly TuiFileLike[] = [];

  constructor(@Inject(TUI_IS_CYPRESS) readonly isCypress: boolean) {
    this.control.valueChanges.subscribe({
      next: (files) => {
        for(let i in files) {
          let file = files[i];

          var reader = new FileReader();
          reader.onload = function(){
            var arrayBuffer = this.result;
          }

          reader.readAsArrayBuffer(file);

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

}
