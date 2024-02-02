import { Component, ViewChild } from '@angular/core';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ChartComponent,
//   ApexDataLabels,
//   ApexPlotOptions,
//   ApexYAxis,
//   ApexTitleSubtitle,
//   ApexXAxis,
//   ApexFill
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   yaxis: ApexYAxis;
//   xaxis: ApexXAxis;
//   fill: ApexFill;
//   title: ApexTitleSubtitle;
// };

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;


};
export type ChartOptions1 = {
  series1: ApexAxisChartSeries;
  chart1: ApexChart;
  dataLabels1: ApexDataLabels;
  plotOptions1: ApexPlotOptions;
  legend1: ApexLegend;
  colors1: string[];
};
@Component({
  selector: 'app-appex-bar-chart',
  templateUrl: './appex-bar-chart.component.html',
  styleUrls: ['./appex-bar-chart.component.scss']
})
export class AppexBarChartComponent {
  // @ViewChild("chart") chart: ChartComponent | undefined;
  // public chartOptions: Partial<ChartOptions>;

  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "Inflation",
  //         data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  //       }
  //     ],
  //     chart: {
  //       height: 350,
  //       type: "bar"
  //     },
  //     plotOptions: {
  //       bar: {
  //         dataLabels: {
  //           position: "top" // top, center, bottom
  //         }
  //       }
  //     },
  //     dataLabels: {
  //       enabled: true,
  //       formatter: function(val) {
  //         return val + "%";
  //       },
  //       offsetY: -20,
  //       style: {
  //         fontSize: "12px",
  //         colors: ["#304758"]
  //       }
  //     },

  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec"
  //       ],
  //       position: "top",
  //       labels: {
  //         offsetY: -18
  //       },
  //       axisBorder: {
  //         show: false
  //       },
  //       axisTicks: {
  //         show: false
  //       },
  //       crosshairs: {
  //         fill: {
  //           type: "gradient",
  //           gradient: {
  //             colorFrom: "#D8E3F0",
  //             colorTo: "#BED1E6",
  //             stops: [0, 100],
  //             opacityFrom: 0.4,
  //             opacityTo: 0.5
  //           }
  //         }
  //       },
  //       tooltip: {
  //         enabled: true,
  //         offsetY: -35
  //       }
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         shade: "light",
  //         type: "horizontal",
  //         shadeIntensity: 0.25,
  //         gradientToColors: undefined,
  //         inverseColors: true,
  //         opacityFrom: 1,
  //         opacityTo: 1,
  //         stops: [50, 0, 100, 100]
  //       }
  //     },
  //     yaxis: {
  //       axisBorder: {
  //         show: false
  //       },
  //       axisTicks: {
  //         show: false
  //       },
  //       labels: {
  //         show: false,
  //         formatter: function(val) {
  //           return val + "%";
  //         }
  //       }
  //     },
  //     title: {
  //       text: "Monthly Inflation in Argentina, 2002",
  //       // floating: 0,
  //       offsetY: 320,
  //       align: "center",
  //       style: {
  //         color: "#444"
  //       }
  //     }
  //   };
  // }
  // @ViewChild("chart") chart: ChartComponent;
  // public chartOptions: Partial<ChartOptions>| any;

 

   @ViewChild("chart")
  chart!: ChartComponent;
  @ViewChild("chart1")
  chart1!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions1> | any;

  constructor() { 
   
      this.chartOptions1 = {
        series: [
          {
            name: "Actual",
            data: [
              {
                x: "2011",
                y: 1292,
                goals: [
                  {
                    name: "Expected",
                    value: 1400,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "2012",
                y: 4432,
                goals: [
                  {
                    name: "Expected",
                    value: 5400,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "2013",
                y: 5423,
                goals: [
                  {
                    name: "Expected",
                    value: 5200,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "2014",
                y: 6653,
                goals: [
                  {
                    name: "Expected",
                    value: 6500,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "2015",
                y: 8133,
                goals: [
                  {
                    name: "Expected",
                    value: 6600,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "2016",
                y: 7132,
                goals: [
                  {
                    name: "Expected",
                    value: 7500,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "2017",
                y: 7332,
                goals: [
                  {
                    name: "Expected",
                    value: 8700,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "2018",
                y: 6553,
                goals: [
                  {
                    name: "Expected",
                    value: 7300,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              }
            ]
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        colors: ["#00E396"],
        dataLabels: {
          formatter: function (val: any, opts: { w: { config: { series: { [x: string]: { data: { [x: string]: { goals: any; }; }; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
            const goals =
              opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
                .goals;
  
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`;
            }
            return val;
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: {
            fillColors: ["#00E396", "#775DD0"]
          }
        }
      };
    
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }
}
