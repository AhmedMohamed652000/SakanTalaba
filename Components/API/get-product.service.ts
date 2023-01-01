import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private _HttpClient:HttpClient) { }

  get_all_product( distance_of_college?:string , finishing_level?:string , price?:string , type_of_house?:string ):Observable<any>
  {

    const HttpParam =new HttpParams({
      fromObject:
      {
        price:`${price}`,
        distance_of_college:`${distance_of_college}`,
        finishing_level:`${finishing_level}`,
        type_of_house:`${type_of_house}`,
      }
    })

    return this._HttpClient.get(`https://api.sakantalaba.live/api/products`,{
      params:HttpParam

    });

  }

  get_one_product(id:any):Observable<any>
  {

    return this._HttpClient.get(`https://api.sakantalaba.live/api/products1/`+id);

  }
  count(id:any):Observable<any>
  {

    return this._HttpClient.get(`https://api.sakantalaba.live/api/products1/`+id);

  }
}
