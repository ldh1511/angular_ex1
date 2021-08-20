import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskIComponent } from './task-i.component';
import { UserDetailTask1Component } from './user-detail-task1/user-detail-task1.component';

const routes: Routes = [
  { path: '', component: TaskIComponent },
  { path: ':id', component: UserDetailTask1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskIRoutingModule { }
