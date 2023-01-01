import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RatingStudentService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {}

  add_rating_users(data:any,id:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    });

    return this._HttpClient.post(`https://api.sakantalaba.live/api/Add_Rating/${id}`,data,
    {headers:headers}
    )
  }


  average_rating_users(data:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer EAAKkVZAueiccBAILLMV6OeaYaYKcfuAbBc8pGwCfkx1A9oJBdMgfBi7XvbF3FjlZC7ei5wDHJ8ZAPJm1qG2b9ZBHm63mrN0cEeqXqxED9tW2Gf9DJDEUwAZAMX0bDqHbsN8wL27w481hqPg9AyGcbGTACGuDebaC0RR7RwYLJlJZA6ZBabZB6i1zWOEPyd4CsjftF3eSQ7F62QZDZD"
    });

    return this._HttpClient.post(`https://api.sakantalaba.live/api/Rates/${data}`,
    {headers:headers}
    )
  }


  get_rating_users(data:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer EAAKkVZAueiccBAILLMV6OeaYaYKcfuAbBc8pGwCfkx1A9oJBdMgfBi7XvbF3FjlZC7ei5wDHJ8ZAPJm1qG2b9ZBHm63mrN0cEeqXqxED9tW2Gf9DJDEUwAZAMX0bDqHbsN8wL27w481hqPg9AyGcbGTACGuDebaC0RR7RwYLJlJZA6ZBabZB6i1zWOEPyd4CsjftF3eSQ7F62QZDZD"
    });

    return this._HttpClient.post(`https://api.sakantalaba.live/api/ShowAndRate/${data}`,
    {headers:headers}
    )
  }

}
