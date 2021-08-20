import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-modal-task1',
  templateUrl: './add-modal-task1.component.html',
  styleUrls: ['./add-modal-task1.component.css']
})
export class AddModalTask1Component implements OnInit {

  @Input() isModalOpen: boolean;
  @Input() data: any[];
  @Input() editItem: any = { name: '' };
  @Output() recevieData = new EventEmitter<object>();
  @Output() messageEvent = new EventEmitter<boolean>();
  @Output() handleEditItem = new EventEmitter<object>();
  constructor() { }
  sumitted = false;
  existsCountry = false;
  existsName = false;
  added = false;
  title = 'Thêm mới thông tin';
  ngOnInit(): void { }
  contactForm = new FormGroup
    ({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      sex: new FormControl(null, [Validators.required]),
    })
  ngOnChanges(changes: SimpleChanges) {
    if (changes.editItem && changes.editItem.currentValue) {
      this.title = 'Sửa đổi thông tin';
      this.added = false;
      this.contactForm.controls['name'].setValue(this.editItem.name);
      this.contactForm.controls['country'].setValue(this.editItem.country);
      this.contactForm.controls['sex'].setValue(this.editItem.sex);
      this.contactForm.controls['id'].setValue(this.editItem.id);
    }
    else {
      this.title = 'Thêm mới thông tin';
      this.added = true;
    }
  }
  onRegister() {
    this.sumitted = true;
    const frmValue = this.contactForm.value;
    let checkExistCountry = this.data.some(({ country }) => country === frmValue['country']);
    let checkExistName = this.data.some(({ name }) => name === frmValue['name']);
    this.existsCountry = checkExistCountry;
    this.existsName = checkExistName;
    if (
      frmValue['name'] !== null &&
      frmValue['country'] !== null &&
      frmValue['sex'] !== null &&
      this.existsCountry === false &&
      this.existsName === false &&
      this.added === true) {
      this.recevieData.emit(frmValue);
      this.isModalOpen = false;
      this.messageEvent.emit(this.isModalOpen);
      this.sumitted = false;
      this.contactForm.reset();
    }
    if (
      frmValue['name'] !== null &&
      frmValue['country'] !== null &&
      frmValue['sex'] !== null &&
      this.added === false) {
      this.handleEditItem.emit(frmValue);
      this.isModalOpen = false;
      this.messageEvent.emit(this.isModalOpen);
      this.sumitted = false;
      this.contactForm.reset();
    }
  }
  handleCloseModal($event) {
    $event.preventDefault();
    this.isModalOpen = false;
    this.sumitted = false;
    this.messageEvent.emit(this.isModalOpen);
    this.contactForm.reset();
  }

}
