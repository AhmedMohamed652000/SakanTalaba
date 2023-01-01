import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private _HttpClient:HttpClient) { }

  change_password_fun(data:any):Observable<any>
  {
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });
    console.log(headers2);
    return this._HttpClient.post("https://api.sakantalaba.live/api/auth/profile/change_password",data,{headers :headers2 });

    }
}
