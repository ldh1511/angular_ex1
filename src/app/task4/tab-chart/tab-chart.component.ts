import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-chart',
  templateUrl: './tab-chart.component.html',
  styleUrls: ['./tab-chart.component.css']
})
export class TabChartComponent implements OnInit {
  defaultData = [
    {
      id: 0,
      img: 'https://i.pinimg.com/564x/45/63/03/456303722e609498bbd91c20e9a48096.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 1,
      img: 'https://i.pinimg.com/236x/34/59/b9/3459b969e23316211ec1cec54f7c2546.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/564x/a7/fb/4a/a7fb4a67618bd2c0a24a0690c5b68b25.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/564x/86/30/42/863042073e07bff116167fd66b2087bd.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 4,
      img: 'https://i.pinimg.com/564x/45/63/03/456303722e609498bbd91c20e9a48096.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 5,
      img: 'https://i.pinimg.com/564x/45/63/03/456303722e609498bbd91c20e9a48096.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 6,
      img: 'https://i.pinimg.com/564x/45/63/03/456303722e609498bbd91c20e9a48096.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 7,
      img: 'https://i.pinimg.com/564x/45/63/03/456303722e609498bbd91c20e9a48096.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 8,
      img: 'https://i.pinimg.com/564x/45/63/03/456303722e609498bbd91c20e9a48096.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
    {
      id: 9,
      img: 'https://i.pinimg.com/564x/45/63/03/456303722e609498bbd91c20e9a48096.jpg',
      name: 'Best friend',
      artist: 'Kananishino',
      view: 564
    },
  ]
  itemSelected = null;
  constructor() { }
  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;
  ngAfterViewInit() {
    console.log(this.myIdentifier.nativeElement.children[this.itemSelected.id]);
  }
  ngOnInit(): void {
    this.itemSelected = this.defaultData[0];
  }
  handleSelectItem(id) {
    this.itemSelected = this.defaultData[id];
    for (let i = 0; i < this.myIdentifier.nativeElement.children.length; i++) {
      this.myIdentifier.nativeElement.children[i].className = "voice-chart--item";
    }
    this.myIdentifier.nativeElement.children[this.itemSelected.id].className = "voice-chart--item active"
  }
}
