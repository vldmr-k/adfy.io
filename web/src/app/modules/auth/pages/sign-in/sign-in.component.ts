import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { EMPTY_STR, INVALID_REQUEST } from 'app/constant';

import { AuthService } from '@module/core/services/auth.service';
import { ConstantPool } from '@angular/compiler';
import { Observable, of, Subject, Subscriber } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TUI_IS_CYPRESS, TuiValidationError } from '@taiga-ui/cdk';
import { getValidateFormErrors, isValidateFormError } from 'app/halper';
import * as e from 'express';
import { SignInResponse } from '@grpc/user/service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  /**
   * @class FormGroup
   */
  signInForm: FormGroup;

  sinInResponse : Subject<SignInResponse> = new Subject<SignInResponse>();

  constructor(
    private fb: FormBuilder,
    @Inject(AuthService) private readonly authService: AuthService,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      email: new FormControl(EMPTY_STR, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(EMPTY_STR, [Validators.required, Validators.minLength(3)]),
      rememberMe: new FormControl(false),
    });
  }
  ngOnInit(): void {
      this.sinInResponse = this.authService.singInResponse
  }

  onSubmit() {
    const value = this.signInForm.value;
    this.authService.login(value.email, value.password, value.rememberMe)

    this.sinInResponse.subscribe({
      next: this.handleSuccess.bind(this),
      error: this.handleError.bind(this)
    })

  }

  private handleSuccess(resp : SignInResponse) {
    this.router.navigateByUrl('/dashboard')
  }

  private handleError(err: any) {
    if (isValidateFormError(err)) {
      const errors = getValidateFormErrors(err);

      errors.forEach((value : string, prop : string) => {
        const formControl = this.signInForm.get(prop);
        if(formControl) {
          formControl.setErrors({
            other: new TuiValidationError(value),
          })
          formControl.markAsTouched()
        }
      })
    }
  }

}
