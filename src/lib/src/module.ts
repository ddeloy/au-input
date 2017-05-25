import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuFaInputComponent} from "./itn-fa-input/itn-fa-input.component";
import {InputRefDirective} from "./common/input-ref.directive";
import {AuMdInputComponent} from "./itn-md-input/itn-md-input.component";





@NgModule({
    declarations: [AuFaInputComponent, InputRefDirective, AuMdInputComponent],
    imports: [
        CommonModule
    ],
    exports: [AuFaInputComponent, AuMdInputComponent, InputRefDirective]
})
export class ItnInputModule { }


