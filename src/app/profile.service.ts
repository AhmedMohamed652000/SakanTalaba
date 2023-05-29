import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private _HttpClient:HttpClient , private _Router:Router) {}


  complete_profile(formData:any):Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });
    console.log(headers);
    return this._HttpClient.post("https://api.sakantalaba.live/api/auth/profile", formData ,{headers :headers });

    }

  get_info_profile():Observable<any>
  {

    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });
    console.log(headers2);
    return this._HttpClient.get("https://api.sakantalaba.live/api/auth/profile",{headers :headers2 });

  }





}
