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
  private getStateFromChild: Subscription;
  private getInfoFromChild: Subscription;
  constructor(
    private apiService: ApiService,
    private task3Service: Task3Service,
    private router: Router
  ) { }
  ngOnInit() {
    this.getStateFromChild = this.task3Service.StateFromChild.subscribe(datas => {
      this.isModalOpen = datas;
    });
    this.getInfoFromChild = this.task3Service.InfoFromChild.subscribe(datas => {
      this.infoModal = datas;
    });
    this.getInfoCategory();
  }
  getInfoCategory() {
    this.apiService.getCategory().subscribe(category => {
      this.ctg = [category];
      this.ctg=this.ctg[0];
      this.router.navigate(['/task3',`${this.ctg[0].categoryId}`])
    });
  }
  ngOnDestroy() {
    this.getStateFromChild.unsubscribe();
    this.getInfoFromChild.unsubscribe();
  }
  receiveStateModal($event){
    this.isModalOpen=$event
  }
}
