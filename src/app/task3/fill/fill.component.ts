import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  totalWorld = null;
  curWord = null;
  question = null;
  stateModal = false;
  isFinished = false;
  valueInputRange = 200;
  totalCorrect = 0;
  arrResult = [];
  checkCorrect = false;
  second = 15;
  interval = null;
  index = 0;
  timer = null;
  nextQuestion = null;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }
  @ViewChild('useThisTemplateVar') elRef: ElementRef;
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
        this.data = this.data.sort(() => 0.5 - Math.random());
      })
    }
    else {
      this.data = check;
      this.data = this.data.sort(() => 0.5 - Math.random());
    }
    this.curWord = this.data[0];
    this.totalWorld = this.data.length;
    this.question = this.createQuestion(this.curWord.name);
    this.startTimer(15);
    this.handleExpiredTime();
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
  handleClickKeyItem(item, e) {
    let check = this.question.r.filter(word => word === item);
    if (check.length >= 1) {
      let index = this.getAllIndexes(this.question.r,this.question.q, check[0]);
      console.log(index);
      this.question.q.map((item, i) => {
        if (index[0] === i) { this.question.q[i] = check[0] }
      })
      let checkFilled = this.question.q.filter(word => word === '_');
      let checkArrResult;
      if (checkFilled.length === 0 && this.isFinished === false) {
        let arrToString = this.question.q.join('');
        checkArrResult = this.arrResult.filter(item => item === arrToString);
        this.checkCorrect = true;
        this.handleTime(this.data, this.index);
      }
      if (checkArrResult && checkArrResult.length === 0) {
        this.arrResult.push(this.question.q.join(''));
        this.totalCorrect += 1;
      }
    }
    if (check.length < 1 && this.isFinished === false) {
      e.target.className = 'keyboard-item selected';
      setTimeout(() => {
        e.target.className = 'keyboard-item';
      }, 300)
    }
  }
  getAllIndexes(arr1, arr2, val) {
    var indexes = [], i;
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === val && arr2[i]==='_') {
        indexes.push(i);
      }
    }
    return indexes;
  }
  handleTime = (data, i) => {
    clearTimeout(this.timer);
    clearTimeout(this.nextQuestion);
    this.index++;
    if (this.index < data.length && this.isFinished === false) {
      this.handleNextQuestion();
    }
    else {
      setTimeout(() => {
        this.stateModal = true;
        this.isFinished = true;
        this.index = 0;
        clearInterval(this.interval);
        clearTimeout(this.timer);
      }, 3000)
    }
  }
  handleNextQuestion() {
    this.nextQuestion = setTimeout(() => {
      clearInterval(this.interval);
      this.startTimer(15);
      this.question = this.createQuestion(this.data[this.index].name);
      this.curWord = this.data[this.index];
      this.checkCorrect = false;
      this.handleExpiredTime();
    }, 3000)
  }
  handleExpiredTime() {
    this.timer = setTimeout(() => {
      if (this.checkCorrect === false) {
        this.stateModal = true;
        this.isFinished = true;
        this.index = 0;
        clearInterval(this.interval);
        clearTimeout(this.timer);
      }
    }, 15000);

  }
  receiveStateModal($event) {
    this.stateModal = $event
  }
  receiveStatePlay($event) {
    this.isFinished = $event;
    this.curWord = this.data[0];
    this.question = this.createQuestion(this.curWord.name);
    this.totalCorrect = 0;
    this.arrResult = [];
    this.checkCorrect = false;
    this.second = 15;
    this.index = 0;
    this.startTimer(15);
    this.handleExpiredTime();
  }
  startTimer(duration) {
    let timer = duration, seconds;
    if (this.second >= 0 && this.isFinished === false) {
      this.interval = setInterval(() => {
        seconds = Number(timer % 60);
        this.second = seconds
        if (--timer < 0) {
          timer = duration;
        }
      }, 900);
    }
  }
}
