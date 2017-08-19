import { Component, Input } from '@angular/core';

import { Data } from '../shared/data';
import { AppComponent } from '../app.component';

import * as moment from 'moment';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent {
  @Input() applicants: Data[] = [];
  @Input() buildingOwners: Data[] = [];
  @Input() condoOwners: Data[] = [];
  @Input() dataUk: Data[] = [];
  @Input() dataUs: Data[] = [];
  @Input() filingReps: Data[] = [];
  @Input() gmailUs: Data[] = [];
  @Input() gmailWorld: Data[] = [];
  applicantsLatestData: any;
  buildingOwnersLatestData: any;
  condoOwnersLatestData: any;
  dataUkLatestData: any;
  dataUsLatestData: any;
  filingRepsLatestData: any;
  gmailUsLatestData: any;
  gmailWorldLatestData: any;
  bounced_ChartData: any[] = [];
  freq_ChartData: any[] = [];
  sentToday_ChartData: any[] = [];
  sentWeek_ChartData: any[] = [];
  sentMonth_ChartData: any[] = [];
  subscribed_ChartData: any[] = [];

  chartOptions = {
    chartArea: { width: '70%' },
    // colors: ['#ee3a8c'],
    height: '300',
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

  bounced_chartOptions = {
    title: 'Bounced',
    pieHole: 0.4,
    height: 400
  }

  sentToday_chartOptions = {
    title: 'Sent Today',
    height: 400,
    is3D: true
  }

  sentWeek_chartOptions = {
    title: 'Sent Week',
    height: 400,
    is3D: true
  }

  sentMonth_chartOptions = {
    title: 'Sent Month',
    height: 400,
    is3D: true
  }

  constructor() { }

  ngOnChanges() {
    // this.getLatestData(this.applicants);
    this.getLatestData();
    this.bouncedChartData();
    this.freqChartData();
    this.sentTodayChartData();
    this.sentWeekChartData();
    this.sentMonthChartData();
    this.subscribedChartData();
  }

  getLatestData() {
    this.applicantsLatestData = this.applicants.length != 0 ? this.applicants[this.applicants.length - 1] : [];
    this.buildingOwnersLatestData = this.buildingOwners.length != 0 ? this.buildingOwners[this.buildingOwners.length - 1] : [];
    this.condoOwnersLatestData = this.condoOwners.length != 0 ? this.condoOwners[this.condoOwners.length - 1] : [];
    this.dataUkLatestData = this.dataUk.length != 0 ? this.dataUk[this.dataUk.length] : [];
    this.dataUsLatestData = this.dataUs.length != 0 ? this.dataUs[this.dataUs.length - 1] : [];
    this.filingRepsLatestData = this.filingReps.length != 0 ? this.filingReps[this.filingReps.length - 1] : [];
    this.gmailUsLatestData = this.gmailUs.length != 0 ? this.gmailUs[this.gmailUs.length - 1] : [];
    this.gmailWorldLatestData = this.gmailWorld.length != 0 ? this.gmailWorld[this.gmailWorld.length - 1] : [];
  }

  bouncedChartData() {
    let chartData: any[] = [
      ['Project', 'Bounced'],
      ['Applicants', ],
      ['Building Owners', ],
      ['Condo Owners', ],
      ['Data UK', ],
      ['Data US', ],
      ['Filing Reps', ],
      ['Gmail US', ],
      ['Gmail World', ]
    ];

    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['bounced'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['bounced'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['bounced'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['bounced'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['bounced'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['bounced'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['bounced'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['bounced'] : 0);

    this.bounced_ChartData = chartData;
  }

  freqChartData() {
    let chartData: any[] = [
      ['Project', 'freq_0', 'freq_1m', 'freq_3m', 'freq_4m', 'freq_recu_4m'],
      ['Applicants', ],
      ['Building Owners', ],
      ['Condo Owners', ],
      ['Data UK', ],
      ['Data US', ],
      ['Filing Reps', ],
      ['Gmail US', ],
      ['Gmail World', ]
    ];

    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['freq_0'] : 0);
    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['freq_1m'] : 0);
    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['freq_3m'] : 0);
    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['freq_6m'] : 0);
    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['freq_recu_4m'] : 0);

    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['freq_0'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['freq_1m'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['freq_3m'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['freq_6m'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['freq_recu_4m'] : 0);


    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['freq_0'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['freq_1m'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['freq_3m'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['freq_6m'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['freq_recu_4m'] : 0);

    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['freq_0'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['freq_1m'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['freq_3m'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['freq_6m'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['freq_recu_4m'] : 0);

    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['freq_0'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['freq_1m'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['freq_3m'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['freq_6m'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['freq_recu_4m'] : 0);

    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['freq_0'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['freq_1m'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['freq_3m'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['freq_6m'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['freq_recu_4m'] : 0);

    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['freq_0'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['freq_1m'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['freq_3m'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['freq_6m'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['freq_recu_4m'] : 0);

    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['freq_0'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['freq_1m'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['freq_3m'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['freq_6m'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['freq_recu_4m'] : 0);

    this.freq_ChartData = chartData;
  }

  sentTodayChartData() {
    let chartData: any[] = [
      ['Project', 'Sent Today'],
      ['Applicants', ],
      ['Building Owners', ],
      ['Condo Owners', ],
      ['Data UK', ],
      ['Data US', ],
      ['Filing Reps', ],
      ['Gmail US', ],
      ['Gmail World', ]
    ];

    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['e_sent_today'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['e_sent_today'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['e_sent_today'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['e_sent_today'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['e_sent_today'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['e_sent_today'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['e_sent_today'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['e_sent_today'] : 0);

    this.sentToday_ChartData = chartData;
  }

  sentWeekChartData() {
    let chartData: any[] = [
      ['Project', 'Sent Week'],
      ['Applicants', ],
      ['Building Owners', ],
      ['Condo Owners', ],
      ['Data UK', ],
      ['Data US', ],
      ['Filing Reps', ],
      ['Gmail US', ],
      ['Gmail World', ]
    ];

    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['e_sent_week'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['e_sent_week'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['e_sent_week'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['e_sent_week'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['e_sent_week'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['e_sent_week'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['e_sent_week'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['e_sent_week'] : 0);

    this.sentWeek_ChartData = chartData;
  }

  sentMonthChartData() {
    let chartData: any[] = [
      ['Project', 'Sent Month'],
      ['Applicants', ],
      ['Building Owners', ],
      ['Condo Owners', ],
      ['Data UK', ],
      ['Data US', ],
      ['Filing Reps', ],
      ['Gmail US', ],
      ['Gmail World', ]
    ];

    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['e_sent_month'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['e_sent_month'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['e_sent_month'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['e_sent_month'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['e_sent_month'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['e_sent_month'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['e_sent_month'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['e_sent_month'] : 0);

    this.sentMonth_ChartData = chartData;
  }

  subscribedChartData() {
    let chartData: any[] = [
      ['Project', 'Subscribed', 'Unsubscribed'],
      ['Applicants', ],
      ['Building Owners', ],
      ['Condo Owners', ],
      ['Data UK', ],
      ['Data US', ],
      ['Filing Reps', ],
      ['Gmail US', ],
      ['Gmail World', ]
    ];

    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['subscribed'] : 0);
    chartData[1].push(this.applicantsLatestData['length'] != 0 ? this.applicantsLatestData['unsubscribed'] : 0);

    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['subscribed'] : 0);
    chartData[2].push(this.buildingOwnersLatestData['length'] != 0 ? this.buildingOwnersLatestData['unsubscribed'] : 0);

    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['subscribed'] : 0);
    chartData[3].push(this.condoOwnersLatestData['length'] != 0 ? this.condoOwnersLatestData['unsubscribed'] : 0);

    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['subscribed'] : 0);
    chartData[4].push(this.dataUkLatestData['length'] != 0 ? this.dataUkLatestData['unsubscribed'] : 0);

    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['subscribed'] : 0);
    chartData[5].push(this.dataUsLatestData['length'] != 0 ? this.dataUsLatestData['unsubscribed'] : 0);

    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['subscribed'] : 0);
    chartData[6].push(this.filingRepsLatestData['length'] != 0 ? this.filingRepsLatestData['unsubscribed'] : 0);

    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['subscribed'] : 0);
    chartData[7].push(this.gmailUsLatestData['length'] != 0 ? this.gmailUsLatestData['unsubscribed'] : 0);

    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['subscribed'] : 0);
    chartData[8].push(this.gmailWorldLatestData['length'] != 0 ? this.gmailWorldLatestData['unsubscribed'] : 0);

    this.subscribed_ChartData = chartData;
  }
}
