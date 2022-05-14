import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@store/models';

@Component({
  selector: 'adfy-project-list-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.less']
})
export class ProjectItemComponent {

  @Input() project!: Project;

  @Output() updateProjectAction: EventEmitter<Project> = new EventEmitter<Project>();

  constructor() {}

  onUpdateProject(project: Project): void {
    this.updateProjectAction.emit(project)
  }

}
