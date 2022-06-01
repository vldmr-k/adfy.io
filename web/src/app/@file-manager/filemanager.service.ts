import { Injectable, Provider } from '@angular/core';
import { AbstractTuiDialogService, TUI_DIALOGS } from '@taiga-ui/cdk';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { FileManagerOptions } from './filemanager-options';

import { FileManagerComponent } from './filemanager.component';

@Injectable({
  providedIn: 'root',
})
export class FileManagerService extends AbstractTuiDialogService<FileManagerOptions> {
  readonly defaultOptions = {
    heading: 'FileManager',
    dismissible: true,
	  label: 'Heading',
  } as const;

  readonly component = new PolymorpheusComponent(FileManagerComponent);

}

// Add this provider to app module
export const FILEMANAGER_PROVIDER: Provider = {
  provide: TUI_DIALOGS,
  useExisting: FileManagerService,
  multi: true,
};
