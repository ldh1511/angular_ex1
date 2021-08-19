import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { H1Component } from './h1/h1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { Task2Component } from './task2/task2.component';
import { AddModalTask2Component } from './add-modal-task2/add-modal-task2.component';
import { RemoveModalTask2Component } from './remove-modal-task2/remove-modal-task2.component';
@NgModule({
  declarations: [
    AppComponent,
    H1Component,
    ModalComponent,
    MainComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    HomeComponent,
    Task2Component,
    AddModalTask2Component,
    RemoveModalTask2Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
