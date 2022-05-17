import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '@store/models';


@Component({
  selector: 'adfy-project-list-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectItemComponent {

  menuState = false;

  @Input() project!: Project;

  @Output() updateAction: EventEmitter<Project> = new EventEmitter<Project>();
  @Output() deleteAction: EventEmitter<Project> = new EventEmitter<Project>();
  @Output() clickCardAction: EventEmitter<Project> = new EventEmitter<Project>();


  constructor() {}

  onUpdateProject($event: Event, project: Project): void {
    $event.preventDefault();
    this.updateAction.emit(project)
  }

  onDeleteProject($event: Event, project: Project): void {
    $event.preventDefault();
    this.deleteAction.emit(project)
  }

  onClickCardAction($event: Event, project: Project): void {
    $event.preventDefault();
    this.clickCardAction.emit(project)
  }


  onObscured(obscured: boolean) {
    if (obscured) {
      this.menuState = false;
    }
  }

  onActiveZone(active: boolean) {
    this.menuState = active && this.menuState;
  }

  onMenuClick($event: Event) {
    $event.stopPropagation()
    this.menuState = !this.menuState;
  }
}
