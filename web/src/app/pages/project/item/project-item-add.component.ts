import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adfy-project-item-add',
  templateUrl: './project-item-add.component.html',
  styleUrls: ['./project-item-add.component.less']
})
export class ProjectItemAddComponent {

  constructor(private readonly router: Router) { }

  ngOnClick() {
    alert(1)
  }
}
