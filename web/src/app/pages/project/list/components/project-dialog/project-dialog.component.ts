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
import { TuiValidationError } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

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
  domains: Array<string> = []

  form: FormGroup;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: new FormControl(EMPTY_STR, { validators: [Validators.required] }),
      domains: new FormArray(
        [new FormControl(EMPTY_STR, [Validators.required])],
        [this.getDomainArrayValidator()],
      ),
    })
  }


  get data(): number {
    return this.context.data;
  }

  onSubit() {
    this.context.completeWith(this.data);
  }

  removePhone(index: number) {
    this.formDomains.removeAt(index);

    let n = 0;

    while (n <= 1 && this.formDomains.controls[n]) {
      this.formDomains.controls[n].setValidators([
        Validators.required,
        this.getDomainLengthValidator(),
      ]);
      n++;
    }
  }

  addDomain() {
    this.formDomains.push(new FormControl('', this.addValidators()));
  }

  get formDomains() {
    return <FormArray>this.form.get('domains');
  }

  addValidators(): ValidationErrors | null {
    return this.formDomains.controls.length < 2
      ? [Validators.required, this.getDomainLengthValidator()]
      : null;
  }

  private getDomainArrayValidator(): ValidatorFn {
    return ((array: FormArray): ValidationErrors | null =>
      array.controls.length < 2 ||
        (!!array.controls.filter(item => item.errors).length && array.controls.length)
        ? {
          length: new TuiValidationError(
            'You should add at least 2 phone number',
          ),
        }
        : null) as ValidatorFn;
  }

  private getDomainLengthValidator(): (
    field: AbstractControl,
  ) => ValidationErrors | null {
    return (field: AbstractControl): ValidationErrors | null =>
      field.value.length <= 3
        ? {
          lenght: new TuiValidationError(this.domainErrorContent),
        }
        : null;
  }

}
