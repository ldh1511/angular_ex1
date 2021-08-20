import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskIRoutingModule } from './task-i-routing.module';
import { TaskIComponent } from './task-i.component';
import { TableComponent } from './table/table.component';
import { AddModalTask1Component } from './add-modal-task1/add-modal-task1.component';
import { UserDetailTask1Component } from './user-detail-task1/user-detail-task1.component';

@NgModule({
  declarations: [
    TaskIComponent,
    TableComponent,
    AddModalTask1Component,
    UserDetailTask1Component
  ],
  imports: [
    CommonModule,
    TaskIRoutingModule,
    ReactiveFormsModule
  ]
})
export class TaskIModule { }
