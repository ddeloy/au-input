import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import {ItnInputModule} from "../../../out-tsc/lib/src/module";

@NgModule({
  imports:      [ BrowserModule, ItnInputModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
