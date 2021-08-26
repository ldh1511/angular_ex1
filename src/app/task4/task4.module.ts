import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task4-routing.module';
import { Task4Component } from './task4.component';
import { BannerComponent } from './banner/banner.component';
import { TabComponent } from './tab/tab.component';
import { ItemCircleComponent } from './item-circle/item-circle.component';
import { ItemSquareComponent } from './item-square/item-square.component';
import { TabChartComponent } from './tab-chart/tab-chart.component';
import { ItemBigSquareComponent } from './item-big-square/item-big-square.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    Task4Component,
    BannerComponent,
    TabComponent,
    ItemCircleComponent,
    ItemSquareComponent,
    TabChartComponent,
    ItemBigSquareComponent,
    ModalComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Task4RoutingModule
  ]
})
export class Task4Module { }
