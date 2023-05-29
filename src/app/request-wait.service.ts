import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestWaitService {


  constructor(private _HttpClient:HttpClient , private _Router:Router) {}


  request_wait(id:any)
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/show_product_request/${id}`,{
      headers:headers

    });


  }



}
