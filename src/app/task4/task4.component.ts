import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  type = ['artist', 'album', 'recommend', 'lastest']
  artistData = [
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440",
      name: 'Kananishino',
    }, 
    {
      img: "https://i.pinimg.com/564x/80/d7/d5/80d7d5b3e0393ea8eac0c1cf7def206e.jpg",
      name: 'Best friend',
    }, 
    {
      img: "https://i.pinimg.com/564x/e6/e4/a4/e6e4a47bba72212a969f2a1b29a669be.jpg",
      name: 'Best friend',
    }, 
    {
      img: "https://i.pinimg.com/564x/b3/f8/5a/b3f85a0b6a3e2c8ffe5619ee39fc6625.jpg",
      name: 'Best friend',
    }, 
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440",
      name: 'Kananishino',
    }, 
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440",
      name: 'Kananishino',
    }, 
  ];
  albumData = [
    {
      img:"https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg",
      name:'Duu Duu Duu'
    },
    {
      img:"https://i.pinimg.com/236x/85/5b/fd/855bfd9c838dc4b79e61190ac0171ce3.jpg",
      name:'Best friend'
    },
    {
      img:"https://i.pinimg.com/564x/e8/1c/da/e81cdafca78018e36697d933534ab810.jpg",
      name:'Doraemon'
    },
    {
      img:"https://i.pinimg.com/564x/01/77/68/017768762f72499501098dcea8201217.jpg",
      name:'Black Pink'
    },
    {
      img:"https://i.pinimg.com/564x/6e/38/a5/6e38a59c6f9aedaf52280c457e9e5544.jpg",
      name:'SMAP Vest Disc 1'
    },
    {
      img:"https://i.pinimg.com/564x/21/e9/e9/21e9e9dfa218fc54bbdfc8191fee606d.jpg",
      name:'SMAP Vest Disc 1'
    },
    {
      img:"https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg",
      name:'SMAP Vest Disc 1'
    },
    {
      img:"https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg",
      name:'SMAP Vest Disc 1'
    },
    {
      img:"https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg",
      name:'SMAP Vest Disc 1'
    },
    {
      img:"https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg",
      name:'SMAP Vest Disc 1'
    },
  ];
  popularTag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  lastestData = [
    {
      img: "https://i.pinimg.com/564x/85/40/a2/8540a2c202563c94df4f34c3783edd75.jpg",
      type: 3,
      name: 'Best friend',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/dc/75/62/dc75620a85349b109b529e0f555897ca.jpg",
      type: 3,
      name: 'Beautiful day',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/cd/11/2d/cd112d4e2a604217984b8d65d792b4cb.jpg",
      type: 3,
      name: 'Endless Tears',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/73/3e/9d/733e9d8d2e31644ca84b5d5520466fd6.jpg",
      type: 3,
      name: 'Sakura Anatani deate',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/96/e4/b3/96e4b3406d1707ce28719f58814f463e.jpg",
      type: 3,
      name: 'Beautiful day',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/88/f9/5a/88f95a2b21bc081f5ecdafb451995d43.jpg",
      type: 3,
      name: 'Beautiful day',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/64/85/24/648524af1d008aaf233960ae4e0618dd.jpg",
      type: 3,
      name: 'Beautiful day',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/bf/87/ec/bf87ec28493fb4fe62ab33874dc6c5d4.jpg",
      type: 1,
      name: 'Beautiful day',
      artist: 'Kananishino',
      view: 546
    },
  ];
  recommendData = [
    {
      img: "https://i.pinimg.com/564x/96/e4/b3/96e4b3406d1707ce28719f58814f463e.jpg",
      type: 3,
      name: 'Best friend',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/88/f9/5a/88f95a2b21bc081f5ecdafb451995d43.jpg",
      type: 2,
      name: 'Beautiful day',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/64/85/24/648524af1d008aaf233960ae4e0618dd.jpg",
      type: 3,
      name: 'Endless Tears',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/bf/87/ec/bf87ec28493fb4fe62ab33874dc6c5d4.jpg",
      type: 1,
      name: 'Sakura Anatani deate',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/96/e4/b3/96e4b3406d1707ce28719f58814f463e.jpg",
      type: 3,
      name: 'Best friend',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/88/f9/5a/88f95a2b21bc081f5ecdafb451995d43.jpg",
      type: 2,
      name: 'Best friend',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/64/85/24/648524af1d008aaf233960ae4e0618dd.jpg",
      type: 3,
      name: 'Best friend',
      artist: 'Kananishino',
      view: 546
    },
    {
      img: "https://i.pinimg.com/564x/bf/87/ec/bf87ec28493fb4fe62ab33874dc6c5d4.jpg",
      type: 1,
      name: 'Best friend',
      artist: 'Kananishino',
      view: 546
    },
  ];
  isModalOpen = false;
  constructor() { }
  ngOnInit(): void {
  }
  handleClickModal() {
    this.isModalOpen = true;
  }
  receiveStateModal($event) {
    this.isModalOpen = $event;
  }
}
