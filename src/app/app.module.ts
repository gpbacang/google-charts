import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { InitialChartComponent } from './initial-chart/initial-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChart,
    InitialChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
