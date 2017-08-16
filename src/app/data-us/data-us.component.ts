import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-us',
  templateUrl: './data-us.component.html',
  styleUrls: ['./data-us.component.scss']
})
export class DataUsComponent implements OnInit {

  public column_ChartData = [
      // ['City', '2010 Population', '2000 Population'],
      // ['New York City, NY', 8175000, 8008000],
      // ['Los Angeles, CA', 3792000, 3694000],
      // ['Chicago, IL', 2695000, 2896000],
      // ['Houston, TX', 2099000, 1953000],
      // ['Philadelphia, PA', 1526000, 1517000]];
      ['Project', 'Data US'],
      ['2017-04-15', 8175000],
      ['2017-04-16', 8175000],
      ['2017-04-17', 8175000],
      ['2017-04-18', 8175000],
      ['2017-04-19', 8175000],
      ['2017-04-20', 8175000]
    ];

      public column_ChartOptions = {
          title: 'Initial',
          chartArea: { width: '50%' },
          hAxis: {
              format: 'M/d/yy',
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

  constructor() { }

  ngOnInit() {
  }

}