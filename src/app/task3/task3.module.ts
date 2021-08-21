import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { Task3RoutingModule } from './task3-routing.module';
import { Task3Component } from './task3.component';
import { ItemComponent } from './item/item.component';
import { NoteComponent } from './note/note.component';
import { ModalComponent } from './modal/modal.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { FillComponent } from './fill/fill.component';


@NgModule({
  declarations: [
    Task3Component,
    ItemComponent,
    NoteComponent,
    ModalComponent,
    FlashCardComponent,
    FillComponent
  ],
  imports: [
    CommonModule,
    Task3RoutingModule,
    HttpClientModule
  ]
})
export class Task3Module { }
