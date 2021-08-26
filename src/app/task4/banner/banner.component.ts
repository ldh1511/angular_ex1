import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  index = 0;
  sampleData = [0, 1, 2];
  moveWidth = 0;
  constructor() { }
  ngOnInit(): void {
  }
  activeSlide(index) {
    this.showSlides(this.index = index);
    // if (this.moveWidth > -((this.sampleData.length - 1) * 1274.05)) {
    //   this.moveWidth -= 1274.05;
    // }
    // else {
    //   this.moveWidth = 0;
    // }
    switch (this.index) {
      case 1:
        this.moveWidth = 0;
        break;
      case 2:
        this.moveWidth=-1274.05;
        break;
      case 3:
        this.moveWidth=-2*1274.05;
        break;
      default:
        break;
    }
    if (this.index === 1) {
      this.moveWidth = 0;
    }
  }
  showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot-item");
    if (n > slides.length) { this.index = 1 }
    if (n < 1) { this.index = slides.length }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[this.index - 1].className += " active";
  }
}
