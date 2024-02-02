import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};
export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-appex-pie-chart',
  templateUrl: './appex-pie-chart.component.html',
  styleUrls: ['./appex-pie-chart.component.scss'],
})
export class AppexPieChartComponent {

  
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  chart1!: ChartComponent;
  public chartOptions1: Partial<ChartOptions1> | any;

  constructor() {
      this.chartOptions1 = {
        series: [70],
        chart: {
          height: 350,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%"
            }
          }
        },
        labels: ["Cricket"]
      };
    







    this.chartOptions = {
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '2022',
              y: 152,
              goals: [
                {
                  name: 'Expected',
                  value: 152,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Feb '22",
              y: 109,
              goals: [
                {
                  name: 'Expected',
                  value: 109,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Mar '22",
              y: 93,
              goals: [
                {
                  name: 'Expected',
                  value: 93,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Apr '22",
              y: 113,
              goals: [
                {
                  name: 'Expected',
                  value: 113,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "May '22",
              y: 126,
              goals: [
                {
                  name: 'Expected',
                  value: 126,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Jun '22",
              y: 161,
              goals: [
                {
                  name: 'Expected',
                  value: 161,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Jul '22",
              y: 188,
              goals: [
                {
                  name: 'Expected',
                  value: 188,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Aug '22",
              y: 143,
              goals: [
                {
                  name: 'Expected',
                  value: 143,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Sep '22",
              y: 102,
              goals: [
                {
                  name: 'Expected',
                  value: 102,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Oct '22",
              y: 113,
              goals: [
                {
                  name: 'Expected',
                  value: 113,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Nov '22",
              y: 116,
              goals: [
                {
                  name: 'Expected',
                  value: 116,
                  strokeWidth: 5,
                  strokeColor: '#6571ff',
                },
              ],
            },
            {
              x: "Dec '22",
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 124,
                  strokeWidth: 1,
                  strokeColor: '#6571ff',
                },
              ],
            },
          ],
        },
      ],

      chart: {
        height: 350,
        type: 'bar',
        title: {
          text: 'My Chart Title',
          align: 'center',
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          borderRadius: 4,
          borderRadiusApplication: 'around',
          dataLabels: {
            orientation: 'vertical',
          },
        },
      },
      title: {
        text: 'text',
        align: 'left',
        margin: 10,
        offsetX: 50,
        offsetY: 10,
        floating: false,

        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      colors: ['#6571ff'],

      dataLabels: {
        // formatter: function (val, opts) {
        //   const goals =
        //     opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
        //       .goals;
        //   if (goals && goals.length) {
        //     return `${val} / ${goals[0].value}`;
        //   }
        //   return val;
        // }
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0'],
        },
      },
    };
  }
}
