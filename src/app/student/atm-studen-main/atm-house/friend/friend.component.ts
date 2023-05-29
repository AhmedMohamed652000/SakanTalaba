import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig,SelectItemGroup } from 'primeng/api';
import {MatDialog} from '@angular/material/dialog';
import { FriendsService } from '../../../../friends.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { SearchFriendsService } from './../../../../search-friends.service';
import { AddFriendService } from './../../../../add-friend.service';
import { FriendsReqService } from './../../../../friends-req.service';
import { DeleteRequestService } from './../../../../delete-request.service';
import { AllRelationFriendsService } from './../../../../all-relation-friends.service';
import { AppComponent } from 'src/app/app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InviteService } from 'src/app/invite.service';
import { UniversityService } from 'src/app/university.service';
import { TalabatMohinaService } from 'src/app/talabat-mohina.service';

interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css','../houses/houses.component.css','../profile/profile.component.css']
})

export class FriendComponent implements OnInit {


  gender=localStorage.getItem('Gender')

  color1:any
  color2:any
  color3:any
  color4:any

  @Input() search_fnd:boolean = false;
  @Input() invite:boolean = false;
  @Input() request_fnd:boolean = false;

  friends=true
  req_rcieve=false
  req_send=false
  friends_color="#00ADB5"
  req_rcieve_color="#EEEEEE"
  req_send_color="#EEEEEE"
  friends_color_2="white"
  req_rcieve_color_2="black"
  req_send_color_2="black"

  friends_fun()
  {
    this.friends=true
    this.req_rcieve=false
    this.req_send=false
    this.friends_color="#00ADB5"
    this.req_rcieve_color="#EEEEEE"
    this.req_send_color="#EEEEEE"
    this.friends_color_2="white"
    this.req_rcieve_color_2="black"
    this.req_send_color_2="black"
  }
  req_rcieve_fun()
  {
    this.friends=false
    this.req_rcieve=true
    this.req_send=false
    this.friends_color="#EEEEEE"
    this.req_rcieve_color="#00ADB5"
    this.req_send_color="#EEEEEE"
    this.friends_color_2="black"
    this.req_rcieve_color_2="white"
    this.req_send_color_2="black"
  }
  req_send_fun()
  {
    this.friends=false
    this.req_rcieve=false
    this.req_send=true
    this.friends_color="#EEEEEE"
    this.req_rcieve_color="#EEEEEE"
    this.req_send_color="#00ADB5"
    this.friends_color_2="black"
    this.req_rcieve_color_2="black"
    this.req_send_color_2="white"
  }

  invite_form = new FormGroup({


  messaging_product:new FormControl( "whatsapp"),
  to:new FormControl( "201060332201"),
  type: new FormControl( "template"),
  template:new FormControl( {
  name: "sakan_talaba_invitation",
    language: {
      code:"en"
    },
    components:[
      {
        type: "header",
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
  })



  })




  invite_fun(num:any)
  {
    this._InviteService.invite(num).subscribe(()=>{
      console.log('successeful')
    })
  }




  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.facebook.com/profile.php?id=100007108988204';

  countries: any=[];
  selectedCountry: any=[];

  blockedDocument: boolean = false;
  blockedDocumentr()
  {
    this.blockedDocument= true;

  }


  langfun():any
  {
    if(localStorage.getItem('lang') == 'ar')
    {
      return true
    }
    else if(localStorage.getItem('lang') == 'en')
    {
      return false
    }
  }


hoppies=
[
  {word:'الغاء' , value:''},
  {word:'كره القدم' , value:'كره القدم'},
  {word:'القراءه' , value:'القراءه'},
  {word:'شطرنج' , value:'شطرنج'}

]
smoking=
[
  {word:'الغاء' , value:''},
  {word:' يدخن' , value:'يدخن'},
  {word:'لا يدخن' , value:'لا يدخن'},
]


  constructor(public _FriendsService:FriendsService,
     private _PrimeNGConfig:PrimeNGConfig ,
      public dialog: MatDialog,
      private _SearchFriendsService:SearchFriendsService,
      private _AddFriendService:AddFriendService,
      private _FriendsReqService:FriendsReqService,
      private _DeleteRequestService:DeleteRequestService,
      private _AllRelationFriendsService:AllRelationFriendsService,
      private _AppComponent:AppComponent,
      private _InviteService:InviteService,
      private _UniversityService:UniversityService,
      private _TalabatMohinaService:TalabatMohinaService
      ) {



        this.color1=_AppComponent.color1
        this.color2=_AppComponent.color2
        this.color3=_AppComponent.color3
        this.color4=_AppComponent.color4

        this.status_friends()



    this.countries = [
      { name: "", code: "AU" },
      { name: "modern", code: "AU" },
      { name: "mansora", code: "BR" },
      { name: "helewan", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];

  }

  myId=localStorage.getItem("userID");
allRelations:any
store:any

university_collection:any;
  ngOnInit() {

    this._UniversityService.getUniversity().subscribe( (data)=>{
      this.university_collection=data
    } )

    this._PrimeNGConfig.ripple = true;

       this._SearchFriendsService.get_all_friends("","",'','').subscribe((data)=>{
        this.all_friends=data.data
      })

       this._FriendsReqService.friend_req().subscribe((data)=>{
      })




  }

  status_friends()
  {
    this._AllRelationFriendsService.get_all_relations().subscribe((data)=>{
      this.allRelations=data

    })

  }
  length2(data:any)
  {
    return Number( data.length)
  }


  displayModal: boolean =false;

  displayBasic: boolean =false;

  displayBasic2: boolean =false;

  displayMaximizable: boolean =false;

  displayPosition: boolean =false;

  position: string='';

  showModalDialog() {
      this.displayModal = true;
  }

  showBasicDialog() {
      this.displayBasic = true;
  }

  showBasicDialog2() {
      this.displayBasic2 = true;
  }

  showMaximizableDialog() {
      this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
  }


all_friends:any
name_frd:any;
university:string='';
get_all_friends()
{
  return this._SearchFriendsService.get_all_friends('','','','').subscribe((data)=>{
    this.all_friends=data
    console.log(this.all_friends)
  })
}
get_all_friends_name(name?:any , univirsity_id?:any ,Hobbies?:any ,smoking?:any)
{
  return this._SearchFriendsService.get_all_friends(name, univirsity_id ,Hobbies ,smoking).subscribe((data)=>{
    this.all_friends=data.data
    console.log(this.all_friends)
  })
}


add_friend(id:any)
{
  return this._AddFriendService.add_friend(id).subscribe((data)=>{
    console.log(this.all_friends)
  })

}

friend_requests:any=[]
friend_req()
{
  return this._FriendsReqService.friend_req().subscribe((data)=>{
    this.friend_requests=data.data

    console.log(this.friend_requests)
  })

}
delete_req(id:any)
{
  return this._DeleteRequestService.delete_req(id).subscribe((data)=>{
    this.friend_requests=data.data
    this.status_friends();
  })

}
confirm_req(id:any)
{
  return this._FriendsReqService.confir_req(id).subscribe((data)=>{
    this.status_friends();

    console.log(this.friend_requests)
  })

}

User_info:any
get_profile_id(data:any){

  this._TalabatMohinaService.get_profile_id(data).subscribe((data)=>{
    this.User_info=data

    console.log(this.User_info)
  })

}

User_contact:any
get_profile_contact(data:any){

  this._TalabatMohinaService.get_profile_id(data).subscribe((data)=>{
    this.User_contact=data

    console.log(this.User_info)
  })

}




}
