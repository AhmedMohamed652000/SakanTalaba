import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/auth.service';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-profile-onwer',
  templateUrl: './profile-onwer.component.html',
  styleUrls: ['../../../../student/atm-studen-main/atm-house/profile/profile.component.css','./profile-onwer.component.css']
})
export class ProfileOnwerComponent implements OnInit {


  color1:any
  color2:any
  color3:any
  color4:any

  @Input() interests: boolean =false
  @Input() call_data: boolean =false
  @Input() profile_data: boolean =false

  constructor(private _messageService: MessageService ,private _ProfileService:ProfileService,private _AuthService:AuthService,private _AppComponent:AppComponent) {

    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4



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


  x = '30102010121718'

  data2:any
  data3:any=[]


  intersts=true


  flag=false
  block=true

  showTopCenter() {
    this._messageService.add({key: 'tc', severity:'success', summary: '', detail: ' تم الحفظ '});
}

main_profile(profile_info:FormGroup)
{
  this._ProfileService.complete_profile(profile_info).subscribe((data)=>{
    this.profile_info=[data.user]

  })
}

profile_main_data = new FormGroup({
    id:new FormControl(null),
    name:new FormControl(null),
    NationalID:new FormControl(null),
    email:new FormControl(null),
    email_verified_at:new FormControl(null),
    sex:new FormControl(null),
    phone:new FormControl(null),
    univirsity_id:new FormControl(null),
    profile_photo:new FormControl(null),
    collage:new FormControl(null),
    date:new FormControl(null),
    Specialization:new FormControl(null),
    address:new FormControl(null),
    grade:new FormControl(null),
    phone2:new FormControl(null),
    facebook:new FormControl(null),
    whatsApp:new FormControl(null),
    telegram:new FormControl(null),
    About:new FormControl(null),
    job:new FormControl(null),
    Social_status:new FormControl(null),
    Religion:new FormControl(null),
    smoking:new FormControl(null),
    chronic_diseases:new FormControl(null),
    cooking_skills:new FormControl(null),
    Hobbies:new FormControl(null),
    created_at:new FormControl(null),
    updated_at:new FormControl(null),
    status:new FormControl(null),
    university:new FormControl(null),


})


profile_info:any

  ngOnInit() {

    this.refresh_profile()



  }
  checked:any=localStorage.getItem('search');

  refresh_profile()
  {
    this._ProfileService.get_info_profile().subscribe((data)=>{

      this.profile_info=data.data
      this.checked=this.profile_info.status;
      localStorage.setItem('search',this.profile_info.status)
      console.log(this.profile_info)
      console.log(this.checked)

    })
  }


}
