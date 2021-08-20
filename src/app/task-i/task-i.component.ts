import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-i',
  templateUrl: './task-i.component.html',
  styleUrls: ['./task-i.component.css']
})
export class TaskIComponent implements OnInit {
  dataExample=[
    { id: 1, name: 'Daniel', country: 'TP Hồ Chí Minh', sex: 'Female' },
    { id: 2, name: 'John', country: 'Hà Nội', sex: 'Male' },
    { id: 3, name: 'John', country: 'Đà Nẵng', sex: 'Female' },
    { id: 4, name: 'John', country: 'Cần Thơ', sex: 'Male' },
  ];
  check = localStorage.getItem('data');
  constructor() { }
  ngOnInit(): void 
  {
    this.handleData()
  }
  data = this.check !== null ? JSON.parse(this.check) : this.dataExample;
  handleData():void{
    if(this.check===null){
      localStorage.setItem('data',JSON.stringify(this.dataExample))
    }
  }
  editItem = null;
  isModalOpen = false;
  recevieMessage($event) 
  {
    this.isModalOpen = $event;
  }
  recevieData($event) 
  {
    this.data = [...this.data, $event];
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  removeItem($event) 
  {
    this.data = $event;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  receiveEditItem($event) 
  {
    this.editItem = $event;
  }
  handleEditItem($event) 
  {
    this.data.map((item, i) => {
      if (item.id == $event.id) {
        this.data[i] = $event;
      }
    });
    localStorage.setItem('data', JSON.stringify(this.data));
  }

}
