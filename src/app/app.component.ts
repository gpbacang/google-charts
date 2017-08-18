import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Data } from './shared/data';

import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // dataUk: Data[] = [];

  constructor() { }

  ngOnInit() {
    // this.getData();
  }

  // getData(){
  //
  //   this.http.get("http://localhost:8000/massprojectreport/2/").toPromise().then((res)=>{
  //   this.dataUk = res.json();
  //   });
  //
  //   setTimeout(() => {
  //     console.log(this.dataUk);
  //   }, 5000);
  // }

  bouncedChartData(data: Data[]) {
    let chartData: any[] = [
      ['Project', 'Bounced'],
    ];
    data.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let bounced: number = item.bounced;

      arrayItem.push(createdAt);
      arrayItem.push(bounced);
      chartData.push(arrayItem);
   });

   return chartData;
  }

  freqChartData(data: Data[]) {
    let chartData: any[] = [
      ['Project', 'Freq_0', 'Freq_1m', 'Freq_3m', 'Freq_6m', 'Freq_recu_4m'],
    ];
    data.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let freq0: number = item.freq_0;
      let freq1m: number = item.freq_1m;
      let freq3m: number = item.freq_3m;
      let freq6m: number = item.freq_6m;
      let freq4m: number = item.freq_recu_4m;

      arrayItem.push(createdAt);
      arrayItem.push(freq0);
      arrayItem.push(freq1m);
      arrayItem.push(freq3m);
      arrayItem.push(freq6m);
      arrayItem.push(freq4m);
      chartData.push(arrayItem);
   });
   return chartData;
  }

  sentTodayChartData(data: Data[]) {
    let chartData: any[] = [
      ['Project', 'e_sent_today'],
    ];
    data.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let sent_today: number = item.e_sent_today;

      arrayItem.push(createdAt);
      arrayItem.push(sent_today);
      chartData.push(arrayItem);
   });
   return chartData;
  }

  sentWeekChartData(data: Data[]) {
    let chartData: any[] = [
      ['Project', 'e_sent_week'],
    ];
    data.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let sent_week: number = item.e_sent_week;

      arrayItem.push(createdAt);
      arrayItem.push(sent_week);
      chartData.push(arrayItem);
   });
   return chartData;
  }

  sentMonthChartData(data: Data[]) {
    let chartData: any[] = [
      ['Project', 'e_sent_month'],
      ['January'],
      ['February'],
      ['March'],
      ['April'],
      ['May'],
      ['June'],
      ['July'],
      ['August'],
      ['September'],
      ['October'],
      ['November'],
      ['December']
    ];
    let janList = [];
    let febList = [];
    let marchList = [];
    let aprilList = [];
    let mayList = [];
    let juneList = [];
    let julyList = [];
    let augList = [];
    let septList = [];
    let octList = [];
    let novList = [];
    let decList = [];

    data.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM");
      let sent_month: number = item.e_sent_month;

      switch(createdAt) {
        case '01': {
          janList.push(sent_month);
          break;
        }
        case '02': {
          febList.push(sent_month);
          break;
        }
        case '03': {
          marchList.push(sent_month);
          break;
        }
        case '04': {
          aprilList.push(sent_month);
          break;
        }
        case '05': {
          mayList.push(sent_month);
          break;
        }
        case '06': {
          juneList.push(sent_month);
          break;
        }
        case '07': {
          julyList.push(sent_month);
          break;
        }
        case '08': {
          augList.push(sent_month);
          break;
        }
        case '09': {
          septList.push(sent_month);
          break;
        }
        case '10': {
          octList.push(sent_month);
          break;
        }
        case '11': {
          novList.push(sent_month);
          break;
        }
        case '12': {
          decList.push(sent_month);
          break;
        }
      }

   });
   const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  chartData[1].push(Math.trunc(average(janList)));
  chartData[2].push(Math.trunc(average(febList)));
  chartData[3].push(Math.trunc(average(marchList)));
  chartData[4].push(Math.trunc(average(aprilList)));
  chartData[5].push(Math.trunc(average(mayList)));
  chartData[6].push(Math.trunc(average(juneList)));
  chartData[7].push(Math.trunc(average(julyList)));
  chartData[8].push(Math.trunc(average(augList)));
  chartData[9].push(Math.trunc(average(septList)));
  chartData[10].push(Math.trunc(average(octList)));
  chartData[11].push(Math.trunc(average(novList)));
  chartData[12].push(Math.trunc(average(decList)));
  return chartData;
    // this.sentMonth_ChartData = chartData;
  }

  subscribedChartData(data: Data[]) {
    let chartData: any[] = [
      ['Category', 'Data'],
    ];

    let subscribedData: any[] = [];
    let unsubscribedData: any[] = [];

    data.filter(function(item){
      let subscribedArrayItem: any[] = [];
      let unsubscribedArrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let subscribed: number = item.subscribed;
      let unsubscribed: number = item.unsubscribed;

      subscribedArrayItem.push("Subscribed");
      subscribedArrayItem.push(subscribed);
      unsubscribedArrayItem.push("Unsubscribed");
      unsubscribedArrayItem.push(unsubscribed);
      subscribedData.push(subscribedArrayItem);
      unsubscribedData.push(unsubscribedArrayItem);

   });
    chartData.push(subscribedData[subscribedData.length - 1]);
    chartData.push(unsubscribedData[unsubscribedData.length - 1]);

    return chartData;

  }
}
