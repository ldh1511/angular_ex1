import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './service/apiService';
import { Category } from './models/category';
import { Task3Service } from './service/task3.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
  providers: [ApiService, Task3Service]
})
export class Task3Component implements OnInit, OnDestroy {
  category: Category;
  ctg = [];
  isModalOpen = false;
  infoModal = null;
  title=null;
  private getState: Subscription;
  private getInfo: Subscription;
  constructor(
    private apiService: ApiService,
    private task3Service: Task3Service,
    private router: Router
  ) { }
  ngOnInit() {
    this.getState = this.task3Service.GetStateModal.subscribe(data => {
      this.isModalOpen = data;
    });
    this.getInfo = this.task3Service.GetInfoModal.subscribe(data => {
      this.infoModal = data;
    });
    this.getInfoCategory();
  }
  getInfoCategory() {
    this.apiService.getCategory().subscribe(category => {
      this.ctg = [category];
      this.ctg=this.ctg[0];
      this.title=this.ctg[0].categoryName;
      this.router.navigate(['/task3',`${this.ctg[0].categoryId}`])
    });
  }
  ngOnDestroy() {
    this.getState.unsubscribe();
    this.getInfo.unsubscribe();
  }
  receiveStateModal($event){
    this.isModalOpen=$event
  }
  handleCloseModal(name){
    this.isModalOpen =false;
    this.title=name;
  }
}
