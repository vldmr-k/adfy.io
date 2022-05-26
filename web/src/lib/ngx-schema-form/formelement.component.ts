import { Component } from "@angular/core"
import { FormElementComponent as BaseFormElementComponent } from 'ngx-schema-form';


@Component({
    selector: 'sf-form-element',
    template: `
      <div *ngIf="formProperty.visible"
          [class.has-error]="!control.valid"
          [class.has-success]="control.valid">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        <sf-widget-chooser
          (widgetInstanciated)="onWidgetInstanciated($event)"
          [widgetInfo]="formProperty.schema.widget">
        </sf-widget-chooser>
        <sf-form-element-action *ngFor="let button of buttons" [button]="button" [formProperty]="formProperty"></sf-form-element-action>
      </div>`
})
export class FormElementComponent extends  BaseFormElementComponent {


}
