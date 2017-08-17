import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as moment from 'moment';

@Injectable()
export class AppService {
  serverUrl = "http://localhost:8000/massprojectreport/";

  constructor(private http: Http) {}


  getData(id: string) {
    return this.http.get("http://localhost:8000/massprojectreport/" + id)
                .map(this.extractData)
                .catch(this.handleError);
    // this.http.get(this.serverUrl + id).toPromise().then((res)=>{
    // console.log(res.json());
    // this.dataUs = res.json();
    // console.log(this.dataUs);
    // this.createChartData();
    // });
  }

  private extractData(res: Response | any) {
    let body = res.json();
    // console.log(body.data);
    return body || {};
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
