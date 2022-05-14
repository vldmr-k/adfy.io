import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '@store/models';


@Component({
  selector: 'adfy-project-list-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectItemComponent {

  projectMenuOpen = false;

  @Input() project!: Project;

  @Output() updateProjectAction: EventEmitter<Project> = new EventEmitter<Project>();

  constructor() {}

  onUpdateProject(project: Project): void {
    this.updateProjectAction.emit(project)
  }

  onClickProjectMenu(event: Event) {
    event.preventDefault()
    this.projectMenuOpen = !this.projectMenuOpen;
  }

  onEditProject(project: Project) {

  }

  onDeleteProject(project: Project) {

  }

  onObscured(obscured: boolean) {
    if (obscured) {
      this.projectMenuOpen = false;
    }
  }

  onActiveZone(active: boolean) {
    this.projectMenuOpen = active && this.projectMenuOpen;
  }
}
