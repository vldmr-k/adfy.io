import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { EMPTY_STR, INVALID_REQUEST } from 'app/constant';

import { AuthService } from '../../services/auth.service';
import { ConstantPool } from '@angular/compiler';
import { Observable, of, Subject, Subscriber } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TUI_IS_CYPRESS, TuiValidationError } from '@taiga-ui/cdk';
import { getValidateFormErrors, isValidateFormError } from 'app/halper';
import * as e from 'express';
import { SignInResponse } from '@grpc/user/service';





@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {

  /**
   * @class FormGroup
   */
  signInForm: FormGroup;

  validateErrors: Subject<string> = new Subject<string>();

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    @Inject(TUI_IS_CYPRESS) isCypress: boolean,
  ) {
    this.signInForm = this.fb.group({
      email: new FormControl(EMPTY_STR, { validators: [Validators.required, Validators.email], asyncValidators: [this.asyncValidatorFn()] }),
      password: new FormControl(EMPTY_STR, [Validators.required, Validators.min(3)]),
      rememberMe: new FormControl(false),
    });


  }


  asyncValidatorFn(): AsyncValidatorFn {
    return (field: AbstractControl): Observable<ValidationErrors | null> => {
      this.validateErrors.subscribe(err => {
        console.log("err", err);
      })
      return of({
        error: new TuiValidationError('Only latin letters allowed'),
      })
    };
  }


  onSubmit() {
    const value = this.signInForm.value;
    this.authService.login(value.email, value.password, value.rememberMe)
      .subscribe((response: SignInResponse) => {
        console.log("response", response)
      }, (err: any) => {
        if (isValidateFormError(err)) {
          var errors = getValidateFormErrors(err);
          errors.forEach((value: string, key: string) => {
            this.validateErrors.next(value)
            console.log('key', key, 'value', value);
          });
        }
      })
  }

}
