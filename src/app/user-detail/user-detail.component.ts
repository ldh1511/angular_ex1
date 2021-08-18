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
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userDetailService: userDetailService
    ) { }
  ngOnInit(): void {
    this.getUserDetail();
  }
  getUserDetail(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.userDetailService.getUserDetail(id)
      .subscribe(userDetail => this.userDetail = userDetail);
    if(this.userDetail===undefined){
      this.router.navigate(['**'])
    }
  }

}
