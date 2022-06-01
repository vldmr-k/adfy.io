import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EMPTY_STR, INVALID_REQUEST } from '@core/constant';

import { AuthService } from '@core/services/auth.service';
import { Subject } from 'rxjs';
import { TUI_IS_CYPRESS, TuiValidationError } from '@taiga-ui/cdk';
import { getValidateFormErrors, isValidateFormError } from '@core/halper';
import { SignInRequest, SignInResponse } from '@grpc/user/service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { signInRequest } from '@store/actions/user.actions';
import { selectUser } from '@store/reducers/user.reducer';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  /**
   * @class FormGroup
   */
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    @Inject(AuthService) private readonly authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: new FormControl(EMPTY_STR, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(EMPTY_STR, [Validators.required, Validators.minLength(3)]),
      rememberMe: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectUser))
    .subscribe((user) => {
      console.log("user", user)
    })

  }

  onSubmit() {
    const value = this.form.value;
    const request: SignInRequest = {
      email: value.email,
      password: value.password
    }

    this.store.dispatch(signInRequest({ request: request }));
  }

  private handleError(err: any) {
    if (isValidateFormError(err)) {
      const errors = getValidateFormErrors(err);

      errors.forEach((value: string, prop: string) => {
        const formControl = this.form.get(prop);
        if (formControl) {
          formControl.setErrors({
            other: new TuiValidationError(value),
          })
          formControl.markAsTouched()
        }
      })
    }
  }

}
