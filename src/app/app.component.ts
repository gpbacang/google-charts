import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Data } from './shared/data';

import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataUs: Data[];
  projectId: string;
  serverUrl: string = "http://localhost:8000/massprojectreport/";

  constructor(
    private http : Http
  ) { }

  ngOnInit() {
    this.getDataUs();
  }

  getDataUs(){
    this.projectId = "1";
    this.http.get(this.serverUrl + this.projectId).toPromise().then((res)=>{
    this.dataUs = res.json();
    });
  }
}
