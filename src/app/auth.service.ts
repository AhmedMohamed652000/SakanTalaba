import{HttpClient} from'@angular/common/http'
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if(localStorage.getItem('userToken') != null)
    {
      this.saveCurrentUser();
    }
  }
  currentUser= new BehaviorSubject(null);

  register(formData:any):Observable<any>
  {
    return     this._HttpClient.post("https://api.sakantalaba.live/api/auth/register",formData);
  }
  login(formData:any):Observable<any>
  {
    // return this._HttpClient.get("https://myfakeapi.com/api/cars/");
    return     this._HttpClient.post("https://api.sakantalaba.live/api/auth/login",formData);
  }


  saveCurrentUser()
  {
    let token:any= localStorage.getItem('userToken')
    this.currentUser.next(token);


  }

  logout()
  {
    this.currentUser.next(null);
    localStorage.removeItem('userToken')
    this._Router.navigate(['/home'])
  }



}
