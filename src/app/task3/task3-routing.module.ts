import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { Task3Component } from './task3.component';

const routes: Routes = [
  {
    path: '', component: Task3Component,
    children: [{ path: ':id', component: NoteComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task3RoutingModule { }
