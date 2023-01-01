import { Component, Input, OnInit } from '@angular/core';
import { AllRelationFriendsService } from 'src/app/all-relation-friends.service';
import { AppComponent } from 'src/app/app.component';
import { FriendsReqService } from 'src/app/friends-req.service';
import { UserInfo } from './../../../../user-info';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {


  @Input() date1: any
  @Input() date12: any
  @Input()  owner: any
  @Input()  owner_pic: any
  @Input()  houses_pic: any
  @Input()  houses_map: any

  color1:any
  color2:any
  color3:any
  color4:any

  constructor(private _AppComponent:AppComponent,private _AllRelationFriendsService:AllRelationFriendsService) {
    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4
  }

UserInfo:any
  friends:any;
  ngOnInit(): void {

  }

}
