import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen: boolean;
  @Output() receiveStateModal= new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void { }
  handleCloseModal(){
    this.isModalOpen=false;
    this.receiveStateModal.emit(this.isModalOpen);
  }
}
