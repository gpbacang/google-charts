import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { DataUsService } from './data-us.service';

export class DataUS {
  id: number;
  e_sent: number;
  initial: number;
  subscribed: number;
  unsubscribed: number;
  bounced: number;
  mozart_rows: number;
  e_sent_today: number;
  e_sent_week: number;
  e_sent_month: number;
  freq_0: number;
  freq_1m: number;
  freq_3m: number;
  freq_6m: number;
  freq_recu_4m: number;
  project_id: number;
  created_at: any;
}

@Component({
  selector: 'app-data-us',
  templateUrl: './data-us.component.html',
  styleUrls: ['./data-us.component.scss']
})
export class DataUsComponent {
  dataUs: DataUS[] = [];
  projectId: number = 1;
  url: string = "http://localhost:8000/massprojectreport/1/";

  // public column_ChartData = [
  //     ['Project', 'Data US'],
  //     ['2017-04-15', 8175000],
  //     ['2017-04-16', 8175000],
  //     ['2017-04-17', 8175000],
  //     ['2017-04-18', 8175000],
  //     ['2017-04-19', 8175000],
  //     ['2017-04-20', 8175000]
  //   ];
  //
  //     public column_ChartOptions = {
  //         title: 'Initial',
  //         chartArea: { width: '50%' },
  //         hAxis: {
  //             format: 'M/d/yy',
  //             gridlines: {count: 15},
  //             textStyle: {
  //                 bold: true,
  //                 fontSize: 12,
  //                 color: '#4d4d4d'
  //             },
  //             titleTextStyle: {
  //                 bold: true,
  //                 fontSize: 18,
  //                 color: '#4d4d4d'
  //             }
  //         },
  //         vAxis: {
  //             minValue: 0,
  //             gridlines: {count: 15},
  //             textStyle: {
  //                 fontSize: 14,
  //                 bold: true,
  //                 color: '#848484'
  //             },
  //             titleTextStyle: {
  //                 fontSize: 14,
  //                 bold: true,
  //                 color: '#848484'
  //             }
  //         }
  //     };

  constructor(

    private http : Http
    // private dataUsService: DataUsService,
  ) { }



  public getData(){

    this.http.get(this.url).toPromise().then((res)=>{
    console.log(res.json());
    });

}

}
