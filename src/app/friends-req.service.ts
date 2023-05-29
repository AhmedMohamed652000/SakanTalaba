import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsReqService {
  friend_req():Observable<any>
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/showfriendrequest`,{
      headers:headers

    });

  }
  confir_req(id:any):Observable<any>
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/confirm/${id}`,{
      headers:headers

    });

  }
  constructor(private _HttpClient:HttpClient) { }
}
