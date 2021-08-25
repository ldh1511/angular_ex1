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
    if (this.moveWidth > -((this.sampleData.length - 1) * 1146.64)) {
      this.moveWidth -= 1146.64;
    }
    else {
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
    dots[this.index-1].className += " active";
  }
}
