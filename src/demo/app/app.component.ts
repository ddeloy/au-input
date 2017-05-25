import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `

      <itn-fa-input icon="envelope">
          <input itnInput type="email" name="email" placeholder="Email" autocomplete="off"
                 class="some-class" data-stripe="email">
      </itn-fa-input>

      <itn-fa-input id="password-field" icon="lock" >
          <input itnInput placeholder="Password" class="test-class">
      </itn-fa-input>

      <itn-fa-input  icon="cc-stripe">
          <input itnInput placeholder="Stripe">
      </itn-fa-input>

      <itn-fa-input icon="paypal">
          <input itnInput placeholder="Paypal">
      </itn-fa-input>

      <itn-md-input icon="search">
          <input itnInput type="email" name="email" placeholder="E-mail">
      </itn-md-input>

      <itn-md-input icon="perm_identity">
          <input itnInput name="identity" placeholder="Identity Number">
      </itn-md-input>

      <itn-md-input icon="receipt">
          <input itnInput name="receipt" placeholder="Receipt">
      </itn-md-input>      
      
  `,
})
export class AppComponent {

  constructor() {


  }

}
