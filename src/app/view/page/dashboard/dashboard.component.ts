import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';
import * as _moment from 'moment';
import _rollupMoment from 'moment';
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

const moment = _rollupMoment || _moment;
const ctx: any = document.getElementById('myChart');
export interface PeriodicElement {
  no: number;
  name: string;
  sname: string;
  ename: string;
  status: string;
  assing: string;
  color?: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    no: 1,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Released',
    assing: 'Leonardo Payne',
    color: 'accent',
  },
  {
    no: 2,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Review',
    assing: '	Carl Henson',
  },
  {
    no: 4,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	10/09/2022',
    status: 'Pending',
    assing: 'Jensen Combs',
    color: 'primary',
  },
  {
    no: 5,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Work in Progress',
    assing: '	Amiah Burton',
  },
  {
    no: 6,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	31/11/2022',
    status: 'Coming soon',
    assing: 'Leonardo Payne',
    color: 'warn',
  },
  {
    no: 3,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	31/11/2022',
    status: 'Coming soon',
    assing: '	Yaretzi Mayo',
    color: 'warn',
  },
  {
    no: 4,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Pending',
    assing: 'Leonardo Payne',
    color: 'primary',
  },
  {
    no: 5,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Released',
    assing: '	Carl Henson',
    color: 'accent',
  },
  {
    no: 6,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Released',
    assing: 'Leonardo Payne',
    color: 'accent',
  },
  {
    no: 1,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Released',
    assing: '	Jensen Combs',
    color: 'accent',
  },
  {
    no: 1,
    name: 'NobleUI jQuery',
    sname: '	01/01/2022',
    ename: '	26/04/2022',
    status: 'Released',
    assing: 'Leonardo Payne',
    color: 'accent',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  chart1!: ChartComponent;
  public chartOptions1: Partial<ChartOptions1> | any;
  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.chartOptions1 = {
      series: [67],

      chart: {
        height: 350,
        type: 'radialBar',
      },
      legend: {
        show: true,
      },
      plotOptions: {
        radialBar: {
          inverseOrder: true,
          hollow: {
            size: '67%',
          },
          track: {
            background: '#E9ECEF',
          },
          dataLabels: {
            name: {
              fontSize: '30px',
            },
            value: {
              fontSize: '30px',
            },
            total: {
              show: true,
              label: 'Storage Used',
              color: '#7987a1', // Set the label color
              style: {
                colors: ['#6571ff', '#6571ff'],
                background: {
                  color: '#000', // Background color for dataLabels
                },
              },
              background: {
                borderColor: '#fff',
                foreColor: '#fff',
              },
            },
          },
        },
      },
      title: {
        text: 'sdjfjsdlkkljg',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: true,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238',
        },
      },
      labels: ['Storage Used', 'unsed'],
      colors: ['#6571ff'],
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
      options: {
        title: {
          display: true,
          position: 'top',
          text: 'Screened',
          fontSize: 14,
        },
        subtitle: {
          text: 'Subtitle',
        },
      },
      title: {
        text: 'sdjfjsdlkkljg',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: true,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
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

  disableRipple = true;
  date = new FormControl(new Date());
  chart6: any = [];
  chart7: any = [];
  chart2: any = [];
  chart3: any = [];
  chart4: any = [];
  chart5: any = [];
  displayedColumns: string[] = [
    'no',
    'name',
    'sdate',
    'edate',
    'status',
    'assing',
  ];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngOnInit() {
    this.chart6 = new Chart('MyChart', {
      type: 'line',

      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
          '2022-05-10',
        ],
        datasets: [
          {
            data: [
              '46',
              '57',
              '50',
              '79',
              '92',
              '57',
              '30',
              '52',
              '70',
              '65',
              '43',
            ],
            backgroundColor: '#6571ff',
            fill: false,
            borderColor: '#6571ff',
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: 0.5,
          },
        },
        plugins: {
          legend: {
            display: false,
          },

          tooltip: {
            yAlign: 'bottom',
            xAlign: 'center',
            backgroundColor: '#ffffff',
            titleColor: 'black',
            bodyColor: 'black',
            borderWidth: 1,
          },
        },

        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            display: false,
            border: {
              color: 'transparant',
              width: 0,
            },
            grid: {},
            ticks: {
              callback: function (value, index, ticks) {
                return value + 'K';
              },
            },
          },
        },
      },
    });
    this.chart7 = new Chart('MyChart1', {
      type: 'bar',

      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
          '2022-05-10',
        ],
        datasets: [
          {
            data: [
              '46',
              '57',
              '50',
              '79',
              '92',
              '57',
              '30',
              '52',
              '70',
              '65',
              '43',
            ],
            backgroundColor: '#6571ff',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },

          tooltip: {
            yAlign: 'bottom',
            xAlign: 'center',
            backgroundColor: '#ffffff',
            titleColor: 'black',
            bodyColor: 'black',
            borderColor: 'gray',
            borderWidth: 1,
          },
        },

        scales: {
          x: {
            display: false,
            grid: {
              display: false,
              color: '#EAEAEA',
            },
            ticks: {
              display: false, //this will remove only the label
            },
          },
          y: {
            display: false,
            border: {
              color: 'transparant',
              width: 0,
            },
            grid: {
              color: '#F8F8F8',
            },
            ticks: {
              callback: function (value, index, ticks) {
                return value + 'K';
              },
            },
          },
        },
      },
    });
    this.chart2 = new Chart('MyChart2', {
      type: 'line',

      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
        ],
        datasets: [
          {
            data: ['46', '57', '50', '79', '92', '57', '30', '52', '70'],
            backgroundColor: '#6571ff',
            // fill: false,
            borderColor: '#6571ff',
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: 0.5,
          },
        },
        plugins: {
          legend: {
            display: false,
          },

          tooltip: {
            yAlign: 'bottom',
            xAlign: 'center',
            backgroundColor: '#ffffff',
            titleColor: 'black',
            bodyColor: 'black',
            borderWidth: 1,
            mode: 'point',
          },
        },

        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            display: false,
            border: {
              color: 'transparant',
              width: 0,
            },
            grid: {},
            ticks: {
              callback: function (value, index, ticks) {
                return value + 'K';
              },
            },
          },
        },
      },
    });
    this.chart3 = new Chart('MyChart3', {
      type: 'line',
      data: {
        labels: [
          'Jan 22',
          '15 Feb',
          'Feb 22',
          '15 Feb',
          '22 Mar',
          ' 15 Mar',
          'Apr 22 ',
          '15 Apr',
          'May 22',
          '15 May',
        ],
        datasets: [
          {
            label: 'General Text Messages',
            data: [50.0, 60.2, 55.0, 58.0, 0, 45.0, 29.0, 22.0, 15.0, 30.0],
            borderWidth: 1,
            backgroundColor: 'red',
            borderColor: '#6571ff',
            pointBorderWidth: 0,
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
            labels: {
              color: '#000000',
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            yAlign: 'bottom',
            xAlign: 'center',
            backgroundColor: '#ffffff',
            titleColor: 'black',
            bodyColor: 'black',
            borderColor: 'red',
            borderWidth: 1,
          },
          title: {
            display: true,
            text: 'Revenue ( $1000 x )',
            align: 'center',
            color: '#000000',
            position: 'left',
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#000',
              font: {
                size: 12,
              },
            },
            grid: {
              lineWidth: 2,
              color: '#F2F7FE',
            },
          },
          y: {
            border: {
              color: 'transparant',
              width: 0,
            },
            grid: {
              lineWidth: 2,
              color: '#F2F7FE',
            },
            ticks: {
              color: '#000000',
              font: {
                size: 11,
              },

              callback: function (value, index, ticks) {
                return value + '.00';
              },
            },
          },
        },
      },
    });
    this.chart4 = new Chart('MyChart4', {
      type: 'bar',
      data: {
        labels: [
          '2022',
          'Feb 22',
          'Mar 22',
          'Apr 22',
          'May 22',
          'Jun 22',
          'Jul 22',
          'Aug 22',
          'Sep 22',
          'Oct 22',
          'Nov 22',
          'Dec 22',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [152, 109, 93, 113, 126, 161, 188, 143, 102, 113, 116, 124],
            borderWidth: 1,
            backgroundColor: '#6571ff',
            borderColor: '#6571ff',
            borderRadius: 6,
            barThickness: 35,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: '#000000',
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            yAlign: 'bottom',
            xAlign: 'center',
            backgroundColor: '#ffffff',
            titleColor: 'black',
            bodyColor: 'black',
            borderColor: '#6571ff',
            borderWidth: 1,
          },
          title: {
            display: true,
            text: 'Number of Sales',
            align: 'center',
            color: '#000000',
            position: 'left',
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#000',
              font: {
                size: 12,
              },
            },
            grid: {
              lineWidth: 2,
              color: '#F2F7FE',
            },
          },
          y: {
            border: {
              color: 'transparant',
              width: 0,
            },
            grid: {
              lineWidth: 2,
              color: '#F2F7FE',
            },
            ticks: {
              color: '#000000',
              maxTicksLimit: 5,
              font: {
                size: 11,
              },
            },
          },
        },
      },
    });

    const data = [67, 33],
      total = data.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ),
      labels = data.map((value) => Math.round((value / total) * 100) + '%');
    this.chart5 = new Chart('MyChart5', {
      type: 'doughnut',
      data: {
        // labels: ['TOTAL STORAGE ', 'USED STORAGE'],
        labels: labels,
        datasets: [
          {
            borderRadius: 0,
            data: data,
            backgroundColor: ['#6571ff', '#e9ecef'],
            label: 'Storage',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxHeight: 8,
              usePointStyle: true,
              pointStyle: 'Rounded',
            },
          },
        },

        cutout: '80%',
        responsive: true,
        spacing: 0,
      },
    });
  }
}
