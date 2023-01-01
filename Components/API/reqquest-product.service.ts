import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqquestProductService {


  constructor(private _HttpClient:HttpClient , private _Router:Router) {}


  request_product(data:any,id:any):Observable<any>
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.post(`https://api.sakantalaba.live/api/request_product/${id}`,data,{
      headers:headers

    });
}


}
