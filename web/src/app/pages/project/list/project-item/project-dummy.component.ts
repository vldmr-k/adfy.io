import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@store/models';

@Component({
  selector: 'adfy-project-list-item-dummy',
  templateUrl: './project-dummy.component.html',
  styleUrls: ['./project-item.component.less']
})
export class ProjectItemDummyComponent {

  @Input() project!: Project;

  @Output() createProjectAction = new EventEmitter();

  constructor() {}

  onCreateProject(): void {
    this.createProjectAction.emit()
  }

}
