import {Component, Input, ContentChild, AfterContentInit, HostBinding} from '@angular/core';
import {InputRefDirective} from '../common/input-ref.directive';
import {commonCss} from '../common/common.css';
import {defaultThemeCss} from '../common/default-theme.css';
import {mdInputStyles} from './itn-md-component.css';


@Component({
  selector: 'itn-md-input',
  template: `

    <i class="md-icon" [innerHtml]="icon"></i>

    <ng-content></ng-content>

  `,
  styles: [ commonCss, defaultThemeCss , mdInputStyles ]
})
export class ItnMdInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngAfterContentInit() {
    if (!this.input) {
      console.error('the itn-md-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }


}
