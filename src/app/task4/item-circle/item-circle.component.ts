import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-circle',
  templateUrl: './item-circle.component.html',
  styleUrls: ['./item-circle.component.css']
})
export class ItemCircleComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
