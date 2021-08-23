import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task3Service } from '../service/task3.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() isModalOpen: boolean;
  private getInfoFromChild: Subscription;
  data={name:'', mean:'', type:''};
  @Output() receiveStateModal= new EventEmitter<any>();
  constructor(private task3Service: Task3Service,) { }
  ngOnInit(): void {
    this.getInfoFromChild = this.task3Service.GetInfoModal.subscribe(data => {
      this.data=data
    });
  }
  ngOnDestroy(){
    this.getInfoFromChild.unsubscribe();
  }
  handleCloseModal(){
    this.isModalOpen=false;
    this.receiveStateModal.emit(this.isModalOpen);
  }
}
