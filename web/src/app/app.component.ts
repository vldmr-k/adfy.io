import { Component } from '@angular/core';

@Component({
  selector: 'adfy-root',
  template: `

  <tui-root>
    <router-outlet></router-outlet>
  </tui-root>


  `
})
export class AppComponent {
  title = 'adfy.io';
}
