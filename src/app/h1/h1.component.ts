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
  @Output()messageEvent= new EventEmitter<boolean>();
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
}
