import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as moment from 'moment';

// import { AppService } from '../app.service';

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
export class DataUsComponent implements OnInit {
  dataUs: DataUS[] = [];
  projectId: string = "1";
  url: string = "http://localhost:8000/massprojectreport/1/";
  initial_ChartData: any[] = [];
  subscribed_ChartData: any[] = [];
  bounced_ChartData: any[] = [];
  freq_ChartData: any[] = [];
  sent_ChartData: any[] = [];

  column_ChartOptions1 = {
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

  column_ChartOptions2 = {
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

  column_ChartOptions3 = {
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

  column_ChartOptions4 = {
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

  column_ChartOptions5 = {
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

  constructor(
    private http : Http
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){

    this.http.get(this.url).toPromise().then((res)=>{
    this.dataUs = res.json();
    this.initialChartData();
    this.subscribedChartData();
    this.bouncedChartData();
    this.freqChartData();
    this.sentChartData();
    });
  }

  initialChartData() {
    let chartData: any[] = [
      ['Project', 'Initial'],
    ];
    this.dataUs.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let initial: number = item.initial;

      arrayItem.push(createdAt);
      arrayItem.push(initial);
      chartData.push(arrayItem);
   });
    this.initial_ChartData = chartData;
  }

  subscribedChartData() {
    let chartData: any[] = [
      ['Project', 'Subscribed', 'Unsubscribed'],
    ];
    this.dataUs.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let subscribed: number = item.subscribed;
      let unsubscribed: number = item.unsubscribed;

      arrayItem.push(createdAt);
      arrayItem.push(subscribed);
      arrayItem.push(unsubscribed);
      chartData.push(arrayItem);
   });
    this.subscribed_ChartData = chartData;
  }

  bouncedChartData() {
    let chartData: any[] = [
      ['Project', 'Bounced'],
    ];
    this.dataUs.filter(function(item){
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
    this.dataUs.filter(function(item){
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

  sentChartData() {
    let chartData: any[] = [
      ['Project', 'e_sent_today', 'e_sent_week', 'e_sent_month'],
    ];
    this.dataUs.filter(function(item){
      let arrayItem: any[] = [];
      let createdAt: any = moment(item.created_at).format("MM-DD-YY");
      let sent_today: number = item.e_sent_today;
      let sent_week: number = item.e_sent_week;
      let sent_month: number = item.e_sent_month;

      arrayItem.push(createdAt);
      arrayItem.push(sent_today);
      arrayItem.push(sent_week);
      arrayItem.push(sent_month);
      chartData.push(arrayItem);
   });
    this.sent_ChartData = chartData;
  }


}
