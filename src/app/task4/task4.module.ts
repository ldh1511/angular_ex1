import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task4-routing.module';
import { Task4Component } from './task4.component';
import { BannerComponent } from './banner/banner.component';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    Task4Component,
    BannerComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    Task4RoutingModule
  ]
})
export class Task4Module { }
