import { Component } from '@angular/core';

import { ControlWidget, FormProperty, ArrayLayoutWidget } from 'ngx-schema-form';


@Component({
  selector: 'sf-array-widget',
  styles: [
    `
      	.row {
            display: flex;
            align-items: center;
        }

        .input {
          width: 20rem;
        }

    `
  ],
  template: `<div class="tui-form__row">


	<label class="horizontal control-label" >
		{{ schema.title }}

    <span *ngIf="schema.description" class="formHelp">
      {{schema.description}}
    </span>

  </label>

    <div class="row" *ngFor="let itemProperty of formProperty.properties">
      <sf-form-element [formProperty]="itemProperty" class="input"></sf-form-element>
      <button tuiIconButton
                type="button"
                size="m"
                title="Delete phone number"
                appearance="icon"
                icon="tuiIconTrash"
                class="tui-space_left-2 icon btn-delete"
                (click)="removeItem(itemProperty)"
                [disabled]="isRemoveButtonDisabled()"
                *ngIf="!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema['minItems'] === schema['maxItems'])"
            >
      </button>
    </div>

    <button tuiButton [icon]="'tuiIconPlus'" type="button" size="s" class="tui-space_top-4" [disabled]="isAddButtonDisabled()"
          *ngIf="!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema['minItems'] === schema['maxItems'])"
          (click)="addItem()">
          Add
      </button>
</div>`
})
export class ArrayWidget extends ArrayLayoutWidget {

  buttonDisabledAdd: boolean = false;
  buttonDisabledRemove: boolean = false;

  addItem() {
    this.formProperty.addItem();
    this.updateButtonDisabledState()
  }

  removeItem(item: FormProperty) {
    this.formProperty.removeItem(item);
    this.updateButtonDisabledState()
  }

  trackByIndex(index: number, item: any) {
    return index;
  }

  updateButtonDisabledState() {
    this.buttonDisabledAdd = this.isAddButtonDisabled()
    this.buttonDisabledRemove = this.isRemoveButtonDisabled()
  }

  isAddButtonDisabled() {
    if (this.schema.hasOwnProperty('maxItems') && Array.isArray(this.formProperty.properties)) {
      if (this.formProperty.properties.length >= this.schema['maxItems']) {
        return true
      }
    }
    return false
  }

  isRemoveButtonDisabled() {
    if (this.schema.hasOwnProperty('minItems') && Array.isArray(this.formProperty.properties)) {
      if (this.formProperty.properties.length <= this.schema?.['minItems']) {
        return true
      }
    }
    return false
  }
}
