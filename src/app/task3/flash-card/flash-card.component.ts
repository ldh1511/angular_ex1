import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/apiService';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {
  slideIndex = 1;
  idCategory = null;
  data = null;
  filterData = null;
  curId = null;
  state = 'all';
  moveWidth=0;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.idCategory = id;
      let check = JSON.parse(localStorage.getItem(`${this.idCategory}`))
      if (check === null) {
        this.apiService.getNote(this.idCategory).subscribe(note => {
          this.data = [note];
          this.data = this.data[0];
          this.data.map(item => {
            item.remember = 0;
          })
          this.filterData = this.data;
          this.curId = this.data[0].id;
          localStorage.setItem(`${this.idCategory}`, JSON.stringify(this.data))
        });
      }
      else {
        this.data = check;
        this.curId = this.data[0].id;
        this.filterData = check;
      }
    });
  }
  nextSlide(index) {
    this.showSlides(this.slideIndex += index);
    if(this.moveWidth>-((this.filterData.length-1)*700)){
      this.moveWidth-=700;
    }
    else{
      this.moveWidth=0;
    }
  }
  prevSlide(index) {
    this.showSlides(this.slideIndex += index);
    if(this.moveWidth<0){
      this.moveWidth+=700;
    }
  }
  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    this.curId = Number(slides[this.slideIndex - 1].children[0].id);
  }
  handleRemember() {
    if (this.curId !== null) {
      this.data.map((item, i) => {
        if(item.id===this.curId && item.remember!==1){
          this.data[i].remember=1;
          this.filterData[i].remember=1;
          localStorage.setItem(`${this.idCategory}`,JSON.stringify(this.data));
        }
      })
    }
  }
  handleUnRemember() {
    if (this.curId !== null) {
      this.data.map((item, i) => {
        if(item.id===this.curId && item.remember!==0){
          this.data[i].remember=0;
          this.filterData[i].remember=0;
          localStorage.setItem(`${this.idCategory}`,JSON.stringify(this.data));
        }
      })
    }
  }
  handleChangeState(e) {
    this.state = e.target.value;
    switch (this.state) {
      case 'all':
        this.filterData = this.data;
        this.curId = this.data[0].id;
        this.moveWidth=0;
        break;
      case 'remember':
        this.filterData = this.data.filter(item => item.remember === 1);
        this.curId = this.filterData.length > 0 ? this.filterData[0].id : null;
        this.moveWidth=0;
        break;
      case 'unremember':
        this.filterData = this.data.filter(item => item.remember === 0);
        this.curId = this.filterData.length > 0 ? this.filterData[0].id : null;
        this.moveWidth=0;
        break;
      default:
        break;
    }
  }
  func(a, b) {  
    return 0.5 - Math.random();
  }  
  handleRandomCard(){
    this.filterData=this.filterData.sort(this.func);
    this.moveWidth=0;
  }
}
