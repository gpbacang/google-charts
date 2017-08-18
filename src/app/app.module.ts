import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { DataUsComponent } from './data-us/data-us.component';
import { DataUkComponent } from './data-uk/data-uk.component';
import { GmailUsComponent } from './gmail-us/gmail-us.component';
import { GmailWorldComponent } from './gmail-world/gmail-world.component';
import { BuildingOwnersComponent } from './building-owners/building-owners.component';
import { CondoOwnersComponent } from './condo-owners/condo-owners.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { FilingRepsComponent } from './filing-reps/filing-reps.component';



@NgModule({
  declarations: [
    AppComponent,
    GoogleChart,
    DataUsComponent,
    DataUkComponent,
    GmailUsComponent,
    GmailWorldComponent,
    BuildingOwnersComponent,
    CondoOwnersComponent,
    ApplicantsComponent,
    FilingRepsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
