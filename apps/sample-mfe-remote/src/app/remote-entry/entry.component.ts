import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-mfe-template-sample-mfe-remote-entry',
  template: `<div class="remote-entry">
    <h2>sample-mfe-remote's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
