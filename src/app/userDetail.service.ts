import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDetail } from './models/userDetail';
@Injectable({ providedIn: 'root' })
export class userDetailService {
  constructor() { }
  data=JSON.parse(localStorage.getItem('data'));
  getUserDetail(id: number): Observable<UserDetail> {
    const user = this.data.find(h => h.id === id);
    return of(user);
  }
}