import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'adfy-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
