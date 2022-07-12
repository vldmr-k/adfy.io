import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Project } from "@store/models";
import { TuiIdentityMatcher } from "@taiga-ui/cdk";


export interface ProjectFilter {
  title: string;
  id: string
}

@Component({
  selector: 'adfy-placement-list-filters',
  template: `
    <form [formGroup]="form">
      <tui-filter
        formControlName="filters"
        size="s"
        [content]="content"
        [identityMatcher]="identityMatcher"
        [items]="projects"
      ></tui-filter>
    </form>
    <ng-template #content let-item>
      {{ item.name }}
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementListFilterComponent {

  readonly form = new FormGroup({
    filters: new FormControl([
      {
        title: 'Drafts',
      },
    ]),
  });

  @Input()
  projects: Project []

  identityMatcher: TuiIdentityMatcher<ProjectFilter> = (
    item1: ProjectFilter,
    item2: ProjectFilter,
  ) => item1.id === item2.id;
}
