import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChart
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
