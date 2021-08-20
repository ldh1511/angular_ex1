import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-ii',
  templateUrl: './task-ii.component.html',
  styleUrls: ['./task-ii.component.css']
})
export class TaskIiComponent implements OnInit {

  dataExample = [
    { id: 1, name: 'Tập thể dục', time: '6:30', state: false },
    { id: 2, name: 'Ăn sáng', time: '7:30', state: true },
    { id: 3, name: 'Đi làm', time: '8:00', state: false },
    { id: 4, name: 'Tập thể dục', time: '6:30', state: true },
  ]
  isModalTask2Open = false;
  isModalRemoveOpen=false;
  removeItem=null;
  editItem=[];
  editItemContent=[];
  state='all';
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
    this.isModalTask2Open = true;
    this.editItem=[];
    this.editItemContent=[];
  }
  handleChangeType(e): void{
    this.editItem=[];
    this.editItemContent=[];
    this.state=e.target.value;
    switch (this.state) {
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
  handleChangeState(e, id){
    this.data.map((item, i) => {
      if (item.id == id) {
        this.data[i].state=e.target.checked;
        this.filterData[i].state=e.target.checked;
      }
    });
    localStorage.setItem('data_task2', JSON.stringify(this.data))
  }
  handleEditItem(id){
    this.editItem.push(id);
  }
  handleChangeName(e, id){
    let value=e.target.value;
    if(this.editItemContent.length>0){
      this.editItemContent.map((item, i)=>{
        if(item.id===id && item.content!==value){
          this.editItemContent[i].content=value;
        }
        else{
          this.editItemContent=[...this.editItemContent, {
            id: id,
            content: value,
          }]
        }
      })
    }
    if(this.editItemContent.length===0){
      this.editItemContent.push({
        id: id,
        content: value,
      })
    }
  }
  handleSaveItem(id){
    let matchValue=this.editItemContent.filter(item=>item.id===id);
    this.data.map((item, i)=>{
      if(item.id===matchValue[0].id){
        this.data[i].name=matchValue[0].content;
        this.editItem=this.editItem.filter(item=>item!==id)
      }
    })
    this.filterData=this.data;
    localStorage.setItem('data_task2', JSON.stringify(this.data))
  }
  handleCancelEditItem(id){
    this.editItem=this.editItem.filter(item=>item!==id)
  }
  receiveDeleteItem($event){
    this.data=this.data.filter(item=>item.id!==$event);
    this.filterData=this.data;
    localStorage.setItem('data_task2', JSON.stringify(this.data))
  }
  receiveStateModal($event): void {
    this.isModalTask2Open = $event
  }
  receiveStateRemoveModal($event): void {
    this.isModalRemoveOpen = $event
  }
  receiveNewData($event): void {
    this.state='all';
    this.data = [...this.data, $event];
    this.filterData = this.data;
    localStorage.setItem('data_task2', JSON.stringify(this.data))
  }

}
