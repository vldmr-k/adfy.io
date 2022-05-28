import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlWidget } from 'ngx-schema-form';


@Component({
  selector: 'sf-string-widget',
  templateUrl: './string.widget.html',
  styleUrls: ['./string.widget.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StringWidget extends ControlWidget {

    getInputType() {
        if (!this.schema.widget.id || this.schema.widget.id === 'string') {
            return 'text';
        } else {
            return this.schema.widget.id;
        }
    }
}
