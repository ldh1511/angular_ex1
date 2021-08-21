import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillComponent } from './fill/fill.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { NoteComponent } from './note/note.component';
import { Task3Component } from './task3.component';

const routes: Routes = [
  {
    path: '', component: Task3Component,
    children: [
      { path: ':id', component: NoteComponent },
      { path: ':id/flash-card', component: FlashCardComponent },
      { path: ':id/fill', component: FillComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task3RoutingModule { }
