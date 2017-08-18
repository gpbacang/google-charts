import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Data } from '../shared/data';

import * as moment from 'moment';

@Component({
  selector: 'app-gmail-world',
  templateUrl: './gmail-world.component.html',
  styleUrls: ['./gmail-world.component.scss']
})
export class GmailWorldComponent implements OnInit {
  gmailWorld: Data[] = [];
  projectId: string = "1";
  url: string = "http://localhost:8000/massprojectreport/4/";
  initial_ChartData: any[] = [];
  subscribed_ChartData: any[] = [];
  bounced_ChartData: any[] = [];
  freq_ChartData: any[] = [];
  sentToday_ChartData: any[] = [];
  sentWeek_ChartData: any[] = [];
  sentMonth_ChartData: any[] = [];
  latest_date: any;

  line_ChartOptions = {
    chartArea: { width: '70%' },
    pointSize: 10,
    pointShape: 'circle',
    lineWidth: 5,
    colors: ['#ee82ee'],
    hAxis: {
      gridlines: {count: 15},
      textStyle: {
        bold: true,
        fontSize: 12,
        color: '#4d4d4d'
      },
      titleTextStyle: {
        bold: true,
        fontSize: 18,
        color: '#4d4d4d'
      }
    },
    vAxis: {
      viewWindow: {
        min: 20000
      },
      gridlines: {count: 15},
      textStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      },
      titleTextStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      }
    }
  };

  column_ChartOptions = {
    chartArea: { width: '70%' },
    // colors: ['#ee3a8c'],
    hAxis: {
      gridlines: {count: 15},
      textStyle: {
        bold: true,
        fontSize: 12,
        color: '#4d4d4d'
      },
      titleTextStyle: {
        bold: true,
        fontSize: 18,
        color: '#4d4d4d'
      }
    },
    vAxis: {
      minValue: 0,
      gridlines: {count: 15},
      textStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      },
      titleTextStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      }
    }
  };

  bar_ChartOptions = {
    height: '500',
    chartArea: { width: '70%' },
    hAxis: {
      gridlines: {count: 15},
      textStyle: {
        bold: true,
        fontSize: 12,
        color: '#4d4d4d'
      },
      titleTextStyle: {
        bold: true,
        fontSize: 18,
        color: '#4d4d4d'
      }
    },
    vAxis: {
      minValue: 0,
      showTextEvery:1,
      gridlines: {count: 15},
      textStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      },
      titleTextStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      }
    }
  };

  pie_chartOptions = {
    title: "Current",
    height: 400
  }

  pie_chartOptions1 = {
    title: "e_sent_month",
    height: 400
  }



  constructor(
    private http : Http
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){

    this.http.get(this.url).toPromise().then((res)=>{
    this.gmailWorld = res.json();
    this.initialChartData();
    this.subscribedChartData();
    this.bouncedChartData();
    this.freqChartData();
    this.sentTodayChartData();
    this.sentWeekChartData();
    this.sentMonthChartData();
    });
  }

  initialChartData() {
    let chartData: any[] = [
      ['Project', 'Initial'],
    ];
    this.gmailWorld.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let initial: number = item.initial;

      arrayItem.push(createdAt);
      arrayItem.push(initial);
      chartData.push(arrayItem);
   });
    this.initial_ChartData = chartData;
  }

  // subscribedChartData() {
  //   let chartData: any[] = [
  //     ['Project', 'Subscribed', 'Unsubscribed'],
  //   ];
  //   this.gmailWorld.filter(function(item){
  //     let arrayItem: any[] = [];
  //     let createdAt: any = moment(item.created_at).format("MM-DD-YY");
  //     let subscribed: number = item.subscribed;
  //     let unsubscribed: number = item.unsubscribed;
  //
  //     arrayItem.push(createdAt);
  //     arrayItem.push(subscribed);
  //     arrayItem.push(unsubscribed);
  //     chartData.push(arrayItem);
  //  });
  //   this.subscribed_ChartData = chartData;
  // }

  bouncedChartData() {
    let chartData: any[] = [
      ['Project', 'Bounced'],
    ];
    this.gmailWorld.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let bounced: number = item.bounced;

      arrayItem.push(createdAt);
      arrayItem.push(bounced);
      chartData.push(arrayItem);
   });
    this.bounced_ChartData = chartData;
  }

  freqChartData() {
    let chartData: any[] = [
      ['Project', 'Freq_0', 'Freq_1m', 'Freq_3m', 'Freq_6m', 'Freq_recu_4m'],
    ];
    this.gmailWorld.filter(function(item){
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
    this.freq_ChartData = chartData;
  }

  sentTodayChartData() {
    let chartData: any[] = [
      ['Project', 'e_sent_today'],
    ];
    this.gmailWorld.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let sent_today: number = item.e_sent_today;

      arrayItem.push(createdAt);
      arrayItem.push(sent_today);
      chartData.push(arrayItem);
   });
    this.sentToday_ChartData = chartData;
  }

  sentWeekChartData() {
    let chartData: any[] = [
      ['Project', 'e_sent_week'],
    ];
    this.gmailWorld.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let sent_week: number = item.e_sent_week;

      arrayItem.push(createdAt);
      arrayItem.push(sent_week);
      chartData.push(arrayItem);
   });
    this.sentWeek_ChartData = chartData;
  }

  sentMonthChartData() {
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

    this.gmailWorld.filter(function(item){
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

    this.sentMonth_ChartData = chartData;
  }

  subscribedChartData() {
    let chartData: any[] = [
      ['Category', 'Data'],
    ];

    let subscribedData: any[] = [];
    let unsubscribedData: any[] = [];

    this.gmailWorld.filter(function(item){
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

    this.subscribed_ChartData = chartData;

  }


}
