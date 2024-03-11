import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  title?: ApexTitleSubtitle;
};


@Component({
  selector: 'app-gold-curre-to-curre',
  templateUrl: './gold-curre-to-curre.component.html',
  styleUrls: ['./gold-curre-to-curre.component.css']
})
export class GoldCurreToCurreComponent implements OnInit, AfterViewInit{
  data:any;
  @ViewChild("chart") chart?: ChartComponent;
  currentDate:Date;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private route:ActivatedRoute) {
    this.currentDate = new Date();
    this.chartData();
  }
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.data = history.state.data;
    this.deleteProperty();
  });
  // console.log("param",this.data)
  
}
ngAfterViewInit(): void {
  // this.checkon();
}
deleteProperty(): void {
    this.data.param2.forEach((item:any) => {
      delete item.iconName;
      delete item.imageUrl;
    });
  } 


chartData(){
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };

}

}
