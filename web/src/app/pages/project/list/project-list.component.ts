import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { ProjectDialogComponent } from '@pages/project/list/components/project-dialog/project-dialog.component';
import { EMPTY_STR } from '@core/constant';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { project } from '@store/reducers/index';
import { projectActions } from '@store/actions/index';

@Component({
  selector: 'adfy-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {

  list$ = this.store.select(project.selectList)

  private readonly dialog = this.dialogService.open<FormGroup>(
    new PolymorpheusComponent(ProjectDialogComponent, this.injector)
  );

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(Store) private readonly store: Store
  ) {
    this.store.dispatch(projectActions.allRequest())
   }

  showProjectDialog() {

    this.dialog.subscribe({
      next: data => {
        console.info(`Dialog emitted name = ${data}`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }

}
