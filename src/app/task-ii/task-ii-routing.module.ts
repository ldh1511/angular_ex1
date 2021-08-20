import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskIiComponent } from './task-ii.component';

const routes: Routes = [{ path: '', component: TaskIiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskIiRoutingModule { }
