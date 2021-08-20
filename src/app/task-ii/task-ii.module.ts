import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskIiRoutingModule } from './task-ii-routing.module';
import { TaskIiComponent } from './task-ii.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { RemoveModalComponent } from './remove-modal/remove-modal.component';


@NgModule({
  declarations: [
    TaskIiComponent,
    AddModalComponent,
    RemoveModalComponent,
  ],
  imports: [
    CommonModule, 
    TaskIiRoutingModule,
    ReactiveFormsModule
  ]
})
export class TaskIiModule { }
