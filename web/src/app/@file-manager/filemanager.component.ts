import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import { FileManagerOptions } from './filemanager-options';
import {TuiDialog} from '@taiga-ui/cdk';
import { TuiDialogContext } from '@taiga-ui/core';

@Component({
  selector: 'adfy-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagerComponent {

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialogContext<string, string>,
  ) { }

  get data(): string {
    return this.context.data;
}

  onSelected(file: string): void {
    this.context.completeWith(file);
  }

}
