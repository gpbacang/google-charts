import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  serverUrl: string = "http://localhost:8000/massprojectreport/";

  constructor(private http: Http) { }

  getData(id: string){

    this.http.get(this.serverUrl + id).toPromise().then((res)=>{
      // console.log(res.json());
    return res.json();
    });
  }

}
