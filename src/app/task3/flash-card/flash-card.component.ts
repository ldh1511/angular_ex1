import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task3Service } from '../service/task3.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit, OnDestroy {
  slideIndex=1;
  idCategory=null;
  private getData: Subscription;
  constructor(
    private task3Service: Task3Service,
  ) { }
  ngOnInit() {
    console.log('init');
    this.getData = this.task3Service.GetCategoryItems.subscribe(data => {
      console.log(data);
    });
  }
  ngOnDestroy(){
    console.log('destroy');
    this.getData.unsubscribe();
  }
  moveSlide(index){
    this.showSlides(this.slideIndex+=index);
  }
  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].className="carousel-item hidden";  
    }
    slides[this.slideIndex-1].className = "carousel-item active";  
  }
}
