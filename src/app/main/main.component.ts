import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }
  check = localStorage.getItem('data');
  data = this.check !== null ? JSON.parse(this.check) : [
    { id: 1, name: 'Daniel', country: 'TP Hồ Chí Minh', sex: 'Female' },
    { id: 2, name: 'John', country: 'Hà Nội', sex: 'Male' },
    { id: 3, name: 'John', country: 'Đà Nẵng', sex: 'Female' },
    { id: 4, name: 'John', country: 'Cần Thơ', sex: 'Male' },
  ];
  editItem = null;
  isModalOpen = false;
  recevieMessage($event) {
    this.isModalOpen = $event;
  }
  recevieData($event) {
    this.data = [...this.data, $event];
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  removeItem($event) {
    this.data = $event;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  receiveEditItem($event) {
    this.editItem = $event;
  }
  handleEditItem($event) {
    this.data.map((item, i) => {
      if (item.id == $event.id) {
        this.data[i] = $event;
      }
    });
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  ngOnInit(): void {
  }
}
