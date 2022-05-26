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
      rememberMe: {
        type: "boolean",
        title: "rememberMe",
      }
    }
  };

  myModel = {name: "test", "url": "http://ukr.net", email: true, rememberMe: false}

  constructor() { }

  ngOnInit(): void {
  }

}
