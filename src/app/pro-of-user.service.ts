import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'

})
export class ProOfUserService {

  constructor(private _HttpClient:HttpClient) { }

  get_all_product():Observable<any>
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/products/${localStorage.getItem('userID')}`,{
      headers:headers

    });

  }}
