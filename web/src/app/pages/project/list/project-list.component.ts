import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { ProjectDialogComponent } from '@pages/project/list/components/project-dialog/project-dialog.component';

@Component({
  selector: 'adfy-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(ProjectDialogComponent, this.injector),
    {
      data: 237,
      dismissible: true,
      label: 'Heading',
    },
  );

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) { }

  showProjectDialog() {

    this.dialog.subscribe({
      next: data => {
        console.info(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }

}
