import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css']
})
export class H1Component {
  check='';
  data = [
    { name: 'Daniel', country: 'TP Hồ Chí Minh', sex: 'Female' },
    { name: 'John', country: 'Hà Nội', sex: 'Male' },
    { name: 'John', country: 'Đà Nẵng', sex: 'Female' },
    { name: 'John', country: 'Cần Thơ', sex: 'Male' },
  ];
  handleFilterMale(){
    this.check="Male";
  }
  handleFilterFemale(){
    this.check="Female";
  }
}
