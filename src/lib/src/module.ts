import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItnFaInputComponent} from './itn-fa-input/itn-fa-input.component';
import {InputRefDirective} from './common/input-ref.directive';
import {ItnMdInputComponent} from './itn-md-input/itn-md-input.component';





@NgModule({
    declarations: [ItnFaInputComponent, InputRefDirective, ItnMdInputComponent],
    imports: [
        CommonModule
    ],
    exports: [ItnFaInputComponent, ItnMdInputComponent, InputRefDirective]
})
export class ItnInputModule { }


