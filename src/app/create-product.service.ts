import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {



  create_product(data:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.post(`https://api.sakantalaba.live/api/products/create`,data,{
      headers:headers

    });
  }










  constructor(private _HttpClient:HttpClient , private _Router:Router) {








  }




  }
