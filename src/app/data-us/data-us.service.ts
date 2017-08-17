import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { DataUS } from './data-us.component';

@Injectable()
export class DataUsService {

  constructor(private http: Http) {}

  getData(id: number) {
    return this.http.get('http://localhost:8000/massprojectreport/' + id)
                .map(this.extractData)
                .catch(this.handleError);
  }

  private extractData(res: Response | any) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
