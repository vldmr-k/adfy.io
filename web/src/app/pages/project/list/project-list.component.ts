import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { ProjectDialogComponent } from '@pages/project/list/project-dialog/project-dialog.component';
import { Store } from '@ngrx/store';
import { project } from '@store/reducers/index';
import { projectActions } from '@store/actions/index';
import { Project } from '@store/models/index'
import { IdRequest } from '@grpc/project/service';

@Component({
  selector: 'adfy-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {

  list$ = this.store.select(project.selectList)



  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(Store) private readonly store: Store
  ) {
    this.store.dispatch(projectActions.allRequest())
  }

  addProjectDialog() {
    this.dialogService
      .open<unknown>(
        new PolymorpheusComponent(ProjectDialogComponent, this.injector)
      ).subscribe({
        next: data => {
          console.info(`Dialog emitted name = ${data}`);
        },
        complete: () => {
          this.store.dispatch(projectActions.allRequest());
        },
      });

  }

  deleteProject($event: Event, project: Project) {
    $event.preventDefault();
    let idRequest: IdRequest = {id: project.id}
    this.store.dispatch(projectActions.deleteRequest({request: idRequest}))
    this.store.dispatch(projectActions.allRequest())
  }

  updateProjectDialog(project: Project) {

    this.dialogService
      .open<unknown>(
        new PolymorpheusComponent(ProjectDialogComponent, this.injector),
        {
          data: project
        }
      )
    .subscribe({
      next: data => {
        console.info(`Dialog emitted name = ${data}`);
      },
      complete: () => {
        this.store.dispatch(projectActions.allRequest());
      },
    });

  }

}
