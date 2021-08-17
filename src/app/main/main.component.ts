import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }
  check=localStorage.getItem('data');
  data =this.check!==null? JSON.parse(this.check) :[
    { name: 'Daniel', country: 'TP Hồ Chí Minh', sex: 'Female' },
    { name: 'John', country: 'Hà Nội', sex: 'Male' },
    { name: 'John', country: 'Đà Nẵng', sex: 'Female' },
    { name: 'John', country: 'Cần Thơ', sex: 'Male' },
  ];
  isModalOpen=false;
  recevieMessage($event){
    this.isModalOpen=$event;
  }
  recevieData($event){
    this.data=[...this.data, $event];
    localStorage.setItem('data',JSON.stringify(this.data));
  }
  removeItem($event){
    this.data=$event;
    localStorage.setItem('data',JSON.stringify(this.data));
  }
  ngOnInit(): void {
  }
}
