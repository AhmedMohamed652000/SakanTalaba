import{HttpClient} from'@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable ,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private _HttpClient:HttpClient , private _Router:Router)
   {

   }

      getUniversity()
     {
       return this._HttpClient.get("https://api.sakantalaba.live/api/unvirsity");

     }
}
