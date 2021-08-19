import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  dataExample = [
    { id: 1, name: 'Tập thể dục', time: '6:30', state: false },
    { id: 2, name: 'Ăn sáng', time: '7:30', state: true },
    { id: 3, name: 'Đi làm', time: '8:00', state: false },
    { id: 4, name: 'Tập thể dục', time: '6:30', state: true },
  ]
  isModalOpen = false;
  isModalRemoveOpen=false;
  removeItem=null;
  editItem=null;
  checkData = localStorage.getItem('data_task2');
  data = this.checkData !== null ? JSON.parse(this.checkData) : this.dataExample;
  filterData=this.data;
  constructor() { }
  ngOnInit(): void {
    this.handleData();
  }
  handleData(): void {
    if (this.checkData === null) {
      localStorage.setItem('data_task2', JSON.stringify(this.dataExample))
    }
  }
  handleOpenModal(): void {
    this.isModalOpen = true;
  }
  handleChangeType(e): void{
    let state=e.target.value;
    switch (state) {
      case 'all':
        this.filterData=this.data;
        break;
      case 'finish':
        this.filterData=this.data.filter(item=>item.state===true);
        break;
      case 'unfinish':
        this.filterData=this.data.filter(item=>item.state===false);
        break;
      default:
        break;
    }
  }
  handleDeleteItem(e){
    this.isModalRemoveOpen=true;
    this.removeItem=e;
  }
  receiveDeleteItem($event){
    this.data=this.data.filter(item=>item.id!==$event);
    this.filterData=this.data;
    localStorage.setItem('data_task2', JSON.stringify(this.data))
  }
  receiveStateModal($event): void {
    this.isModalOpen = $event
  }
  receiveStateRemoveModal($event): void {
    this.isModalRemoveOpen = $event
  }
  receiveNewData($event): void {
    this.data = [...this.data, $event];
    this.filterData=this.data;
    localStorage.setItem('data_task2', JSON.stringify(this.data))
  }
}
