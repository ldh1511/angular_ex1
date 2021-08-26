import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-square',
  templateUrl: './item-square.component.html',
  styleUrls: ['./item-square.component.css']
})
export class ItemSquareComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
