import { Component } from '@angular/core';
import { chartService } from './chart.service';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Component({
  templateUrl: './subFeature.component.html',
  styleUrls: ['./subFeature.component.css']
})

export class subFeatureComponent {
  chart = [];

  constructor(private _chart: chartService) { }

  ngOnInit() {
    this._chart.dailyForecast()
      .subscribe(res => {
        let temp_max = res[0].list.map(res => res.main.temp_max)
        let temp_min = res[0].list.map(res => res.main.temp_min)
        let alldates = res[0].list.map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })

        this.chart = new Chart('canvas', {
          type: 'pie',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: 'red',
                fill: false
              },
              {
                data: temp_min,
                borderColor: 'blue',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        }),
         this.chart = new Chart('canvasBar', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: 'red',
                fill: false
              },
              {
                data: temp_min,
                borderColor: 'blue',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      })
  }
}
