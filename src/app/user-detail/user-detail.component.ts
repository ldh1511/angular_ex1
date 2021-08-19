import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserDetail } from '../models/userDetail';
import { userDetailService } from '../userDetail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail:UserDetail ;
  data=JSON.parse(localStorage.getItem('data'));
  checkData=null;
  text=null;
  constructor(
    private route:ActivatedRoute,
    private userDetailService: userDetailService
    ) { }
  ngOnInit(): void {
    this.getUserDetail();
  }
  getUserDetail(): void{
    this.route.paramMap.subscribe(param=>{
      const id=Number(param.get('id'));
      this.userDetailService.getUserDetail(id)
      .subscribe(userDetail => this.userDetail = userDetail);
      if(this.userDetail!==undefined){
        let test=this.data.filter(item=> item.id!==this.userDetail.id);
        this.checkData=test;
        this.text=null;
        console.log("not ok")
      }
      else{
        this.checkData=this.data;
        this.text="None data";
        console.log("ok");
      }
    })
  }

}