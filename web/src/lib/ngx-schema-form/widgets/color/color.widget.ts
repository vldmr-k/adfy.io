import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlWidget } from 'ngx-schema-form';
import {defaultEditorColors} from '@taiga-ui/addon-editor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'sf-color-widget',
  templateUrl: './color.widget.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorWidget extends ControlWidget {

    color = '#ffdd2d';

    readonly palette = defaultEditorColors;
}
