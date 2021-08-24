import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fill-modal',
  templateUrl: './fill-modal.component.html',
  styleUrls: ['./fill-modal.component.css']
})
export class FillModalComponent implements OnInit {
  @Input() stateModal: boolean;
  @Input() isFinished: boolean;
  @Input() totalCorrect: any;
  @Input() totalWorld: any;
  @Output() receiveStateModal = new EventEmitter<boolean>();
  @Output() receiveStatePlay = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit(): void {
  }
  handlePlayAgain(){
    this.stateModal=false;
    this.isFinished=false;
    this.receiveStateModal.emit(this.stateModal);
    this.receiveStatePlay.emit(this.isFinished);
  }
}
