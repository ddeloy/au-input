import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { itnInputModule } from 'itninput';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, itnInputModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
