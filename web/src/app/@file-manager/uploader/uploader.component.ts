import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';


@Component({
  selector: 'adfy-filemanager-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.less']
})
export class UploaderComponent {

  readonly control = new FormControl();
  rejectedFiles: readonly TuiFileLike[] = [];

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
