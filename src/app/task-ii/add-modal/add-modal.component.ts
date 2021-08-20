import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
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
  modalForm2 = new FormGroup(
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
    this.modalForm2.reset();
  }
  handleSubmitForm() {
    this.summited = true;
    const frmValue = this.modalForm2.value;
    if (frmValue['name'] !== null && frmValue['time'] !== null && frmValue['id'] !== null && frmValue['state']!==null) {
      this.receiveNewData.emit(frmValue);
      this.isModalTask2Open = false;
      this.summited = false;
      this.receiveStateModal.emit(this.isModalTask2Open);
      this.modalForm2.reset();
    }
  }
}
