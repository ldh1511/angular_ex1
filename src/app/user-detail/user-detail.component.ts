import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  constructor(
    private route:ActivatedRoute,
    private router:Router,
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
      let test=this.data.filter(item=>item.id!==this.userDetail.id);
      this.checkData=test;
    })
    if(this.userDetail===undefined){
      this.router.navigate(['**'])
    }
  }

}