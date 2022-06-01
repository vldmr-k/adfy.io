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

  readonly files: readonly TuiFileLike[] = [
      {
          name: 'Loaded.txt',
      },
      {
          name: 'A file with a very very long title to check that it can be cut correctly.txt',
      },
  ];

  loadingFile: TuiFileLike | null = {
      name: 'Loading file.txt',
  };

  readonly rejectedFiles: readonly TuiFileLike[] = [
      {
          name: 'File with an error.txt',
          content: 'Something went wrong this time',
      },
  ];

  readonly fileWithLink: TuiFileLike = {
      name: 'with link.txt',
      src: 'https://tools.ietf.org/html/rfc675',
  };

  removedFiles = [this.loadingFile as TuiFileLike];
  restoredFiles: TuiFileLike[] = [];

  constructor(@Inject(TUI_IS_CYPRESS) readonly isCypress: boolean) {}

  removeLoading(): void {
      this.loadingFile = null;
  }

  restore(file: TuiFileLike | null): void {
      if (!file) {
          return;
      }

      this.restoredFiles = [...this.restoredFiles, file];
      this.removedFiles = this.removedFiles.filter(
          removed => file.name !== removed?.name,
      );
  }

  remove(file: TuiFileLike): void {
      this.removedFiles = [...this.removedFiles, file];
      this.restoredFiles = this.restoredFiles.filter(
          restored => file.name !== restored?.name,
      );
  }

}
