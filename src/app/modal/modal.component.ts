import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen: boolean;
  @Output() recevieData = new EventEmitter<object>();
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor() { }
  sumitted = false;
  ngOnInit(): void { }
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    sex: new FormControl("", [Validators.required]),
  })
  onRegister() {
    this.sumitted = true;
    const frmValue = this.contactForm.value;
    if (frmValue['name'] !== '' && frmValue['country'] !== '' && frmValue['sex'] !== '') {
      this.recevieData.emit(frmValue);
      this.isModalOpen = false;
      this.messageEvent.emit(this.isModalOpen);
    }
  }
  handleCloseModal($event) {
    $event.preventDefault();
    this.isModalOpen = false;
    this.messageEvent.emit(this.isModalOpen);
  }
}
