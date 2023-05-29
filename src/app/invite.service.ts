import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {}

  invite(data:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer EAAKkVZAueiccBAILLMV6OeaYaYKcfuAbBc8pGwCfkx1A9oJBdMgfBi7XvbF3FjlZC7ei5wDHJ8ZAPJm1qG2b9ZBHm63mrN0cEeqXqxED9tW2Gf9DJDEUwAZAMX0bDqHbsN8wL27w481hqPg9AyGcbGTACGuDebaC0RR7RwYLJlJZA6ZBabZB6i1zWOEPyd4CsjftF3eSQ7F62QZDZD"
    });

    return this._HttpClient.post(`https://graph.facebook.com/v13.0/112488634836801/messages`,
    `
      messaging_product: "whatsapp",
      to: "201060332201",
      type: "template",
      template: {
        name: "sakan_talaba_invitation",
        language: {
          code: "en"
        },
        components: [
          {
            type: header,
            parameters: [
              {
                type: "image",
                image: {
                  link: "https://sakantalaba.live/assets/image/123_en.png"
                }
              }
            ]
          }
        ]
      }
    `,{headers:headers}
  )}





}
