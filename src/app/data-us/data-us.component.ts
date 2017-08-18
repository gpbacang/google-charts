import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Data } from '../shared/data';
import { DataService } from '../shared/data.service';
import { AppComponent } from '../app.component';

import * as moment from 'moment';

@Component({
  selector: 'app-data-us',
  templateUrl: './data-us.component.html',
  styleUrls: ['./data-us.component.scss']
})
export class DataUsComponent implements OnInit {
  dataUs: Data[] = [];
  dataUsLength: number;
  projectId: string = "1";
  page: string = "data-us"
  url: string = "http://localhost:8000/massprojectreport/1/";
  initial_ChartData: any[] = [];
  subscribed_ChartData: any[] = [];
  bounced_ChartData: any[] = [];
  freq_ChartData: any[] = [];
  sentToday_ChartData: any[] = [];
  sentWeek_ChartData: any[] = [];
  sentMonth_ChartData: any[] = [];
  // latest_date: any;
  //
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
    private http : Http,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.getData();

  }

  getData(){
    this.http.get(this.url).toPromise().then((res)=>{
    this.dataUs = res.json();
    this.subscribedChartData();
    this.bouncedChartData();
    this.freqChartData();
    this.sentTodayChartData();
    this.sentWeekChartData();
    this.sentMonthChartData();
    this.dataUsLength = this.dataUs.length;
    });
  }

  bouncedChartData() {
    this.bounced_ChartData = this.appComponent.bouncedChartData(this.dataUs);
  }

  freqChartData() {
    this.freq_ChartData = this.appComponent.freqChartData(this.dataUs);
  }

  sentTodayChartData() {
    this.sentToday_ChartData = this.appComponent.sentTodayChartData(this.dataUs);
  }

  sentWeekChartData() {
    this.sentWeek_ChartData = this.appComponent.sentWeekChartData(this.dataUs);
  }

  sentMonthChartData() {
    this.sentMonth_ChartData = this.appComponent.sentMonthChartData(this.dataUs);
  }

  subscribedChartData() {
    this.subscribed_ChartData = this.appComponent.subscribedChartData(this.dataUs);
  }

}
