import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() type: any;
  @Input() data: any;
  name = null;
  slideIndex=0;
  moveWidth=0;
  left=false;
  right=true;
  widthItem=null;
  constructor() { }
  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;
  ngOnInit(): void {
    switch (this.type) {
      case 'artist':
        this.name = 'Nghệ sĩ'
        break;
      case 'album':
        this.name = 'Album nổi bật'
        break;
      case 'recommend':
        this.name='Đề xuất'
        break;
      case 'lastest':
        this.name='Mới nhất'
        break;
      default:
        break
    }
  }
  ngAfterViewInit() {
    switch (this.type) {
      case 'album':
        this.widthItem=this.myIdentifier.nativeElement.children[0].offsetWidth;
        break;
      case 'recommend':
        this.widthItem=this.myIdentifier.nativeElement.children[0].offsetWidth;
        break;
      default:
        break
    }
  }
  nextSlide(index) {
    this.showSlides(this.slideIndex += index);
    if (this.moveWidth > -((8 - 5) * this.widthItem)) {
      this.moveWidth -= this.widthItem;
      this.left=true;
    }
    else {
      this.moveWidth = 0;
      this.left=false;
    }
  }
  prevSlide(index) {
    this.showSlides(this.slideIndex += index);
    if(this.moveWidth < 0){
      this.moveWidth += this.widthItem;
      if(this.moveWidth===0){
        this.left=false;
      }
    }
    else{
      this.left=false;
    }
  }
  showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
  }
}
