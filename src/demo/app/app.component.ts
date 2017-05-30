import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <h3>Font Awesome</h3>
      <div>
      <itn-fa-input icon="envelope">
          <input itnInput type="email" name="email" placeholder="Email" autocomplete="off">
      </itn-fa-input>
      </div>
      <br/>
      <div>
        <itn-fa-input icon="lock" >
          <input itnInput placeholder="Password" class="test-class">
      </itn-fa-input>
      </div>
      <br/>
      <div>
        <itn-fa-input  icon="cc-stripe">
          <input itnInput placeholder="Stripe">
      </itn-fa-input>
      </div>
    <br/>
    <h3>Material Design</h3>
      <div>
      <itn-md-input icon="search">
          <input itnInput type="email" name="email" placeholder="E-mail">
      </itn-md-input>
      </div>
      <br/>
      <div>
      <itn-md-input icon="perm_identity">
          <input itnInput name="identity" placeholder="Identity Number">
      </itn-md-input>
      </div>
      <br/>
      <div>
      <itn-md-input icon="receipt">
          <input itnInput name="receipt" placeholder="Receipt">
      </itn-md-input> 
      </div>
    <br/>
    <h3>Custom MD Theme</h3>
    <div class="custom-md-theme">
      <itn-fa-input icon="envelope">
        <input itnInput type="email" name="email" placeholder="Email" autocomplete="off">
      </itn-fa-input>
    </div>
    <br/>
      
  `,
})
export class AppComponent {

  constructor() {


  }

}
