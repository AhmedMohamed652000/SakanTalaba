import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchFriendsService {



  get_all_friends( name?:any , univirsity_id?:any ,Hobbies?:any ,smoking?:any  ):Observable<any>
  {

    const HttpParam =new HttpParams({
      fromObject:
      {
        name:`${name}`,
        univirsity_id:`${univirsity_id}`,
        Hobbies:`${Hobbies}`,
        smoking:`${smoking}`,
      }
    })

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/auth/users`,{
      params:HttpParam,
      headers:headers

    });

  }

  constructor(private _HttpClient:HttpClient) { }
}
