import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friend_request:Array<UserInfo>=[]

  constructor() { }
}
