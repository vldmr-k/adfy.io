import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { ProjectDialogComponent } from '@pages/project/list/components/project-dialog/project-dialog.component';
import { EMPTY_STR } from '@core/constant';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'adfy-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {

  private readonly dialog = this.dialogService.open<FormGroup>(
    new PolymorpheusComponent(ProjectDialogComponent, this.injector)
  );

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) { }

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
