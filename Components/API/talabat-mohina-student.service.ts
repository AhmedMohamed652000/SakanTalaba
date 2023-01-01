import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TalabatMohinaStudentService {

  constructor(private _HttpClient:HttpClient) { }


  talabat_mohaina_student():Observable<any>
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

    return this._HttpClient.get(`https://api.sakantalaba.live/api/acceptuser0/${id}`,
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

    return this._HttpClient.get(`https://api.sakantalaba.live/api/acceptuser1/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus2(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/acceptuser2/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus3(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/acceptuser3/${id}`,
    {headers:headers}
    );
  }



  talabat_mohaina_satatus4(id:any)
  {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.get(`https://api.sakantalaba.live/api/acceptuser4/${id}`,
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
