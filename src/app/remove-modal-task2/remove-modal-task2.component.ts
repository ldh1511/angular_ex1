import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remove-modal-task2',
  templateUrl: './remove-modal-task2.component.html',
  styleUrls: ['./remove-modal-task2.component.css']
})
export class RemoveModalTask2Component implements OnInit {

  @Input() isModalRemoveOpen: boolean;
  @Input() removeItem: any;
  @Output() receiveStateRemoveModal = new EventEmitter<boolean>();
  @Output() receiveDeleteItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  handleCloseModal(): void{
    this.isModalRemoveOpen=false;
    this.receiveStateRemoveModal.emit(this.isModalRemoveOpen);
  }
  handleRemoveItem():void{
    this.receiveDeleteItem.emit(this.removeItem);
    this.isModalRemoveOpen=false;
    this.receiveStateRemoveModal.emit(this.isModalRemoveOpen);
  }

}
