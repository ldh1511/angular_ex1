import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-chart',
  templateUrl: './tab-chart.component.html',
  styleUrls: ['./tab-chart.component.css']
})
export class TabChartComponent implements OnInit {
  defaultData=[0,1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit(): void {
  }

}
