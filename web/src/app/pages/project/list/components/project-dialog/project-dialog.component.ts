import { Component, ChangeDetectionStrategy, Inject, ViewChild } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder, FormControl,
  FormGroup,
  FormArray,
  ValidatorFn,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { EMPTY_STR } from '@core/constant';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiBooleanHandler, TuiValidationError, EMPTY_ARRAY } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';


function createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {
  return ({value}: AbstractControl) => {
      const invalidDomains = value ? value.filter(handler) : EMPTY_ARRAY;
      return invalidDomains.length > 0
          ? {
                tags: new TuiValidationError('Some tags are invalid'),
            }
          : null;
  };
}

function domainValidator(domain: string) {
  return !/\d/.test(domain);
}

@Component({
  selector: 'adfy-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDialogComponent {

  @ViewChild('domainsErrorContent')
  domainErrorContent: PolymorpheusContent = '';

  name: string | null = null;
  domains: Array<string> = EMPTY_ARRAY

  form: FormGroup;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: new FormControl(EMPTY_STR, { validators: [Validators.required] }),
      domains: new FormControl(EMPTY_ARRAY, createControlValidator(domainValidator))
    })
  }


  onSubmit() {
    this.context.completeWith(0);
  }

  get hasErrors(): boolean {
    return this.form.valid
  }
}
