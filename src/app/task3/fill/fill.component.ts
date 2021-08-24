import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/apiService';
@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
export class FillComponent implements OnInit {
  idCategory = null;
  data = [];
  curWord = null;
  question = null;
  stateModal = false;
  isFinished = false;
  valueInputRange = 200;
  totalCorrect=0;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.idCategory = id;
      this.fetchData();
    })
  }
  fetchData() {
    let check = JSON.parse(localStorage.getItem(`${this.idCategory}`));
    if (check === null) {
      this.apiService.getNote(this.idCategory).subscribe(data => {
        this.data = [data];
        this.data = this.data[0];
      })
    }
    else {
      this.data = check;
    }
    this.curWord = this.data[0];
    this.question = this.createQuestion(this.curWord.name);
    this.handleTime(this.data);
  }
  createQuestion(word) {
    let arrWord = word.split('');
    // chia từ thành mảng 
    let totalPosition = Math.floor(Math.random() * ((arrWord.length / 2) - 1 + 1)) + 1;
    //lấy tổng số vị trí để trống
    const shuffleArr = word.split('').sort(() => 0.5 - Math.random());
    //xáo trộn mảng
    let valueOfPosition = shuffleArr.slice(0, totalPosition);
    //lấy giá các từ để trống
    arrWord.map((item, index) => {
      valueOfPosition.map(i => {
        if (item === i) {
          arrWord[index] = '_'
        }
      })
    })
    //lấy về mảng câu hỏi
    let keyboard = this.createKeyBoard(valueOfPosition, word)
    return {
      q: arrWord, // mảng câu hỏi
      r: word.split(''), //mảng đáp án
      hiddenWord: valueOfPosition,// đáp án
      keyboard: keyboard, // các phím
    }
  }
  createKeyBoard(hiddenWord, word) {
    let arrKeyItem = [];
    let filterData = this.data.filter(item => item.name !== word);
    let shuffleArr = filterData.sort(() => 0.5 - Math.random());
    shuffleArr.map((item, i) => {
      if (i < 3) {
        let arrItem = item.name.split('');

        arrKeyItem = arrKeyItem.concat(arrItem);
      }
    })
    arrKeyItem = arrKeyItem.concat(hiddenWord);
    arrKeyItem = arrKeyItem.sort(() => 0.5 - Math.random());
    arrKeyItem = Array.from(new Set(arrKeyItem))
    return arrKeyItem;
  }
  handleClickKeyItem(item) {
    let check = this.question.r.filter(word => word === item);
    if (check.length >= 1) {
      let index = this.getAllIndexes(this.question.r, check[0]);
      this.question.q.map((item, i) => {
        index.map(index => {
          if (index === i) { this.question.q[i] = check[0] }
        })
      })
      let checkFilled = this.question.q.filter(word => word === '_');
      if(checkFilled.length===0){
        this.totalCorrect+=1;
      }
    }
  }
  getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        indexes.push(i);
      }
    }
    return indexes;
  }
  handleTime = (data) => {
    var index = 1;
    let timer=setInterval(() => {
      if (index < data.length) {
        this.question = this.createQuestion(this.data[index].name);
        this.curWord = this.data[index];
      }
      else{
        this.stateModal=true;
        this.isFinished=false;
        clearInterval(timer);
      }
      index++;
    }, 2000);
  }
  receiveStateModal($event){
    this.stateModal=$event
  }
  receiveStatePlay($event){
    this.isFinished=$event;
    this.curWord = this.data[0];
    this.handleTime(this.data);
  }
}
