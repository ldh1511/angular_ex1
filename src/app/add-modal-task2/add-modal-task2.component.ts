import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-modal-task2',
  templateUrl: './add-modal-task2.component.html',
  styleUrls: ['./add-modal-task2.component.css']
})
export class AddModalTask2Component implements OnInit {
  @Input() isModalTask2Open: boolean;
  @Input() data: any[];
  @Output() receiveStateModal = new EventEmitter<boolean>();
  @Output() receiveNewData = new EventEmitter<object>();
  summited = false;
  finish=true;
  unfinish=false;
  constructor() { }
  ngOnInit(): void {
  }
  modalForm = new FormGroup(
    {
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
    }
  )
  handleCloseModal($event) {
    $event.preventDefault();
    this.isModalTask2Open = false;
    this.summited = false;
    this.receiveStateModal.emit(this.isModalTask2Open);
    this.modalForm.reset();
  }
  handleSubmitForm() {
    this.summited = true;
    const frmValue = this.modalForm.value;
    if (frmValue['name'] !== null && frmValue['time'] !== null && frmValue['id'] !== null && frmValue['state']!==null) {
      this.receiveNewData.emit(frmValue);
      this.isModalTask2Open = false;
      this.summited = false;
      this.receiveStateModal.emit(this.isModalTask2Open);
      this.modalForm.reset();
    }
  }
}
