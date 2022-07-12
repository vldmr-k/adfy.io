import { Component, ChangeDetectionStrategy, Inject, ViewChild } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder, UntypedFormControl,
  UntypedFormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { EMPTY_STR } from '@core/constant';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiBooleanHandler, TuiValidationError, EMPTY_ARRAY, TuiDialog } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { ProjectServiceClient } from '@grpc/project/service.client';
import { select, Store } from '@ngrx/store';
import { projectActions } from "@store/actions/index"
import { CreateRequest, UpdateRequest } from '@grpc/project/service';
import { Project } from "@store/models/index"


function createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {
  return ({ value }: AbstractControl) => {
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

  form: UntypedFormGroup;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean, Project>,
    private readonly projectServiceClient: ProjectServiceClient,
    @Inject(Store) private store: Store,
    private readonly fb: UntypedFormBuilder
  ) {
    this.form = this.fb.group({
      name: new UntypedFormControl(this.project?.name, { validators: [Validators.required] }),
      domain: new UntypedFormControl(this.project?.domain, createControlValidator(domainValidator))
    })
  }


  get project(): Project | undefined {
    return this.context.data;
  }

  private create() {
    let value = this.form.value;

    let request: CreateRequest = {
      name: value.name,
      description: "",
      domain: value.domain
    }

    this.store.dispatch(projectActions.createRequest({ request: request }))
  }

  private update() {
    let value = this.form.value;
    let id : string = this.project?.id || "";
    let request: UpdateRequest = {
      id: id,
      name: value.name,
      description: "",
      domain: value.domain
    }

    this.store.dispatch(projectActions.updateRequest({ request: request }))
  }



  onSubmit() {
    this.isNew ? this.create() : this.update()
    this.context.completeWith(true);
  }

  get hasErrors(): boolean {
    return this.form.valid
  }

  get isNew(): boolean {
    return this.project === undefined;
  }
}
