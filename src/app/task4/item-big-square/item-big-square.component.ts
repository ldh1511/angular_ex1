import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-big-square',
  templateUrl: './item-big-square.component.html',
  styleUrls: ['./item-big-square.component.css']
})
export class ItemBigSquareComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
