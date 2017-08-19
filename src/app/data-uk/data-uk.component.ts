import { Component, Input } from '@angular/core';

import { Data } from '../shared/data';
import { AppComponent } from '../app.component';

import * as moment from 'moment';

@Component({
  selector: 'app-data-uk',
  templateUrl: './data-uk.component.html',
  styleUrls: ['./data-uk.component.scss']
})
export class DataUkComponent implements OnInit {
  @Input() dataUk: Data[] = [];
  initial_ChartData: any[] = [];
  subscribed_ChartData: any[] = [];
  bounced_ChartData: any[] = [];
  freq_ChartData: any[] = [];
  sentToday_ChartData: any[] = [];
  sentWeek_ChartData: any[] = [];
  sentMonth_ChartData: any[] = [];

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
    pieHole: 0.4,
    height: 400
  }

  pie_chartOptions1 = {
    title: "e_sent_month",
    height: 400
  }

  constructor(
    private appComponent: AppComponent
  ) { }

  ngOnChanges(changes: any) {
    this.subscribedChartData();
    this.bouncedChartData();
    this.freqChartData();
    this.sentTodayChartData();
    this.sentWeekChartData();
    this.sentMonthChartData();
  }

  bouncedChartData() {
    this.bounced_ChartData = this.appComponent.bouncedChartData(this.dataUk);
  }

  freqChartData() {
    this.freq_ChartData = this.appComponent.freqChartData(this.dataUk);
  }

  sentTodayChartData() {
    this.sentToday_ChartData = this.appComponent.sentTodayChartData(this.dataUk);
  }

  sentWeekChartData() {
    this.sentWeek_ChartData = this.appComponent.sentWeekChartData(this.dataUk);
  }

  sentMonthChartData() {
    this.sentMonth_ChartData = this.appComponent.sentMonthChartData(this.dataUk);
  }

  subscribedChartData() {
    this.subscribed_ChartData = this.appComponent.subscribedChartData(this.dataUk);
  }

}
