import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task3Service } from '../service/task3.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() content: any;
  type = null;
  getFirstCharacter(type: string) {
    let data = type.split('');
    return data[0];
  }
  constructor(private task3Service: Task3Service,) { }
  ngOnInit(): void {
    this.type = this.getFirstCharacter(this.content.type);
  }
  handleClick() {
  }
  onSend() {
    this.task3Service.notifyStateModal(true);
  }
}
