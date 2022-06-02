import { Component, AfterViewInit, Inject, Injector } from '@angular/core';
import { FileManagerOptions } from '@file-manager/filemanager-options';
import { FileManagerComponent } from '@file-manager/filemanager.component';
import { FileManagerService } from '@file-manager/filemanager.service';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';

import {
  PolymorpheusComponent,
  PolymorpheusContent, PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';

import { ControlWidget } from 'ngx-schema-form';

@Component({
  selector: 'sf-file-widget',
  template: `<div class="tui-space_vertical-2">


    <!--
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
  <input [name]="name" class="text-widget file-widget" [attr.id]="id"
    [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null"
    (change)="onFileChange($event)">
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
-->
  <button tuiButton icon="tuiIconStructureLarge" size="m" (click)="onClick()">
    File Manager
  </button>
</div>`
})
export class FilemanagerWidget extends ControlWidget implements AfterViewInit {

  protected reader = new FileReader();
  protected filedata: any = {};

  constructor(
    @Inject(FileManagerService) private readonly fileManagerService: FileManagerService,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService
  ) {
    super();
  }

  ngAfterViewInit() {
    // OVERRIDE ControlWidget ngAfterViewInit() as ReactiveForms do not handle
    // file inputs
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
    });

    this.reader.onloadend = () => {
      this.filedata.data = window.btoa((this.reader.result as string));
      this.formProperty.setValue(this.filedata, false);
    };
  }

  onFileChange($event: any) {
    const file = $event.target.files[0];
    this.filedata.filename = file.name;
    this.filedata.size = file.size;
    this.filedata['content-type'] = file.type;
    this.filedata.encoding = 'base64';
    this.reader.readAsBinaryString(file);
  }

  onClick() {
    let options: FileManagerOptions = {
      heading: "test",
      dismissible: true
    }

    this.dialogService.open<string>
      (new PolymorpheusComponent(FileManagerComponent, this.injector), {
        data: "from filemanager widget.ts",
        size: "l"
      })
      .subscribe({
        next: data => {
            console.info(`Dialog emitted data = ${data}`);
        },
    });
  }
}
