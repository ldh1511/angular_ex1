import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './service/apiService';
import { Category } from './models/category';
import { Task3Service } from './service/task3.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
  providers: [ApiService, Task3Service]
})
export class Task3Component implements OnInit, OnDestroy {
  category: Category;
  data = [];
  isModalOpen = false;
  private getStateFromChild: Subscription;
  constructor(
    private apiService: ApiService,
    private task3Service: Task3Service,
  ) { }
  ngOnInit() {
    this.getInfoCategory();
    this.getStateFromChild = this.task3Service.StateFromChild.subscribe(data => {
      this.isModalOpen = data
    }
    );
  }
  getInfoCategory() {
    this.apiService.getCategory().subscribe(category => {
      this.data = [category];
      return this.category = category
    });
  }
  ngOnDestroy() {
    this.getStateFromChild.unsubscribe();
  }
  receiveStateModal($event){
    this.isModalOpen=$event
  }
}
