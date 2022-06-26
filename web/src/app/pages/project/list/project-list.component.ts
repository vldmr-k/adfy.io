import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { ProjectDialogComponent } from '@pages/project/list/project-dialog/project-dialog.component';
import { Store } from '@ngrx/store';
import { project } from '@store/reducers/index';
import { projectActions } from '@store/actions/index';
import { Project } from '@store/models/index'
import { IdRequest } from '@grpc/project/service';
import { Router } from '@angular/router';
import { ROUTER_PLACEMENT_ADD } from '@pages/placement/placement-routing.module';


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
    @Inject(Router) private readonly router: Router,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(Store) private readonly store: Store
  ) {
    this.store.dispatch(projectActions.listRequest())
  }

  addProjectDialog() {
    this.dialogService
      .open<unknown>(
        new PolymorpheusComponent(ProjectDialogComponent, this.injector)
      ).subscribe()

  }

  onClickCardAction(project: Project) {
      this.router.navigate([ROUTER_PLACEMENT_ADD], { queryParams: { projectId: project.id } })
  }

  onDeleteProjectAction(project: Project) {
    let idRequest: IdRequest = {id: project.id}
    this.store.dispatch(projectActions.deleteRequest({request: idRequest}))
  }

  onUpdateProjectDialog(project: Project) {

    this.dialogService
      .open<unknown>(
        new PolymorpheusComponent(ProjectDialogComponent, this.injector),
        {
          data: project
        }
      )
    .subscribe();

  }

}
