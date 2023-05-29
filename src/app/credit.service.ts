import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private _HttpClient:HttpClient) { }


  get_token(data:JSON)
  {
    return this._HttpClient.post("https://accept.paymob.com/api/auth/tokens",data)
  }


  get_order(data:any)
  {
    return this._HttpClient.post("https://accept.paymob.com/api/ecommerce/orders",data)
  }


  get_payment_token(data:any)
  {
    return this._HttpClient.post("https://accept.paymob.com/api/acceptance/payment_keys",data)
  }





}
