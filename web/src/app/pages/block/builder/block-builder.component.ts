import { Component, OnInit } from '@angular/core';
import { ISchema } from 'ngx-schema-form';

@Component({
  selector: 'adfy-block-builder',
  templateUrl: './block-builder.component.html',
  styleUrls: ['./block-builder.component.less']
})
export class BlockBuilderComponent implements OnInit {

  mySchema: ISchema = {
    "$schema": "http://json-schema.org/draft-04/hyper-schema#",
    "type": "object",
    properties: {
      name: {
        type: "string",
        title: "Username",
      },
      email: {
        type: "boolean",
        title: "Email",
      },
      url: {
        type: "string",
        title: "Url",
      },
      rememberMe: {
        type: "boolean",
        title: "rememberMe",
      },
      color: {
        type: "string",
        title: "Color",
        widget: "color"
      },
    },
    required: ['name', 'email']
  };

  myModel = {name: "test", "url": "http://ukr.net", email: true, rememberMe: false, color: "#ccc"}

  constructor() { }

  ngOnInit(): void {
  }

  printData() {
    return JSON.stringify(this.myModel)
  }

}
