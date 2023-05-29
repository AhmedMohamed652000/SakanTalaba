import { Injectable } from '@angular/core';
import {  HousesInfo } from './houses-info';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousesInfoService {

 constructor(private http: HttpClient) { }


// getProducts():Observable<any> {
//   return this.http.get("")
// }
}
