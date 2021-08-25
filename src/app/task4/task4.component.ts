import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  type=['artist','album', 'recommend','lastest']
  artistData=[0, 1, 2, 3, 4, 5, 6, 7, 8];
  albumData=[0, 1, 2, 3, 4, 5, 6, 7, 8];
  chartData=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  recommendData=[0, 1, 2, 3, 4, 5, 6, 7, 8];
  lastestData=[0, 1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit(): void {
  }

}
