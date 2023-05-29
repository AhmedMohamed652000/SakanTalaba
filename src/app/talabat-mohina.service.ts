import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalabatMohinaService {

  constructor(private _HttpClient:HttpClient) { }


  talabat_mohaina()
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get("https://api.sakantalaba.live/api/show_product_request",
    {headers:headers}
    );
  }




  talabat_mohaina_satatus0(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/accept0/${id}`,
    {headers:headers}
    );
  }

  get_profile_id(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/show_user/${id}`,
    {headers:headers}
    );
  }

  talabat_mohaina_satatus1(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/accept1/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus2(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/accept2/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus3(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/accept3/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus4(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/accept4/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus5(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/accept5/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus6(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/accept6/${id}`,
    {headers:headers}
    );
  }






}
