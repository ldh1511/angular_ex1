import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css']
})
export class H1Component {
  check='';
  @Input() isModalOpen: boolean;
  @Input() data: any[];
  @Output() messageEvent= new EventEmitter<boolean>();
  @Output() removeItem = new EventEmitter<object>();
  handleFilterMale(){
    this.check="Male";
  }
  handleFilterFemale(){
    this.check="Female";
  }
  handleOpenModal(){
    this.isModalOpen=true;
    this.messageEvent.emit(this.isModalOpen);
  }
  handleRemoveItem(item){
    this.data=this.data.filter((items,i)=>i!==item);
    this.removeItem.emit(this.data);
  }
}
