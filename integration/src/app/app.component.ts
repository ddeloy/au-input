import { Component } from '@angular/core';


@Component({
  selector: 'integration-app',
  template: `

      <h2>Hello Angular Library</h2>

      <itn-fa-input icon="envelope" id="email-field">
          <input itnInput type="email" name="email" placeholder="Email" autocomplete="off"
                 class="some-class" data-stripe="email">
      </itn-fa-input>
      
      <itn-md-input icon="perm_identity">
          <input itnInput name="identity" placeholder="Identity Number">
      </itn-md-input>


  `,
})
export class AppComponent {

  constructor() {

  }
}
