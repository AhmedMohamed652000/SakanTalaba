import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDateService {


  get_pro_Date(data:any):Observable<any>
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });


    return this._HttpClient.post("https://api.sakantalaba.live/api/product_Dates",data,
    {headers:headers}
    )
  }

  constructor(private _HttpClient:HttpClient , private _Router:Router) {}
}
