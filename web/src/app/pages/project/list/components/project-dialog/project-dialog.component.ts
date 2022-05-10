import { Component, ChangeDetectionStrategy, Inject, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { EMPTY_STR } from '@core/constant';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiBooleanHandler, TuiValidationError, EMPTY_ARRAY } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { ProjectServiceClient } from '@grpc/project/service.client';
import { select, Store } from '@ngrx/store';
import { projectActions } from "@store/actions/index"
import { CreateRequest } from '@grpc/project/service';


function createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {
  return ({value}: AbstractControl) => {
      const invalidDomains = value ? value.filter(handler) : EMPTY_ARRAY;
      return invalidDomains.length > 0
          ? {
                tags: new TuiValidationError('Some domains are invalid'),
            }
          : null;
  };
}

function domainValidator(domain: string) {
  return !/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain);
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
  domain: Array<string> = EMPTY_ARRAY

  form: FormGroup;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<FormGroup>,
    private readonly projectServiceClient: ProjectServiceClient,
    @Inject(Store) private store: Store,
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: new FormControl(this.name, { validators: [Validators.required] }),
      domain: new FormControl(this.domain, createControlValidator(domainValidator))
    })
  }


  onSubmit() {
      let value = this.form.value;

      let request : CreateRequest = {
        name: value.name,
        description: "",
        domain: value.domain
      }

      this.store.dispatch(projectActions.createRequest({ request: request }))
  }

  get hasErrors(): boolean {
    return this.form.valid
  }
}
