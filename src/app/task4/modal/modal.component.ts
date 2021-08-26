import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() stateModal: any;
  @Output() clickModal= new  EventEmitter<boolean>();
  handleClickModal(){
    this.stateModal=false;
    this.clickModal.emit(this.stateModal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
