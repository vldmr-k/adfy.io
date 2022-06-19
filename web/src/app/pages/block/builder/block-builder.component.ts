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
      slider: {
        type: "string",
        title: "Slider Image",
        widget: "filemanager"
      },
      "colors": {
        "type": "array",
        "description": "Colors",
        "index": "i",
        "items": {
          "type": "string",
          "description": "Color $i",
          "widget": {
            "id": "color"
          }
        }
      }
    },
    required: ['name', 'email']
  };

  myModel = {"name":"test","url":"http://ukr.net","email":true,"rememberMe":false,"colors":["rgba(126, 58, 58, 1)","rgba(109, 24, 24, 1)","rgba(195, 181, 181, 1)"]}


  ngOnInit(): void {
  }

  printData() {
    return JSON.stringify(this.myModel)
  }

  onChangeForm(value: any) {
    console.log("onChangeForm", value);
  }

  onModelChangeForm(value: any) {
    console.log("onModelChangeForm", value);
  }

}
