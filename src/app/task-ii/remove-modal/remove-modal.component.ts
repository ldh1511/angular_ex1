import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.css']
})
export class RemoveModalComponent implements OnInit {

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
