import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent  {

  color1:any
  color2:any
  color3:any
  color4:any

  isOpen :boolean =false
  isLogin :boolean =false
  islogout()
  {
    this._AuthService.logout();
  }


  realodPage() {
    window.location.reload();
  }


  toggleNavbar()
  {
    this.isOpen = !this.isOpen
  }

  lan:any
  changeLang(e:any)
  {
    this._TranslateService.setDefaultLang(e.target.value)
    localStorage.setItem('lang',e.target.value)
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

switchUser():any
{
  if(localStorage.getItem('Role') == 'user')
  {
    this._Router.navigate(['/student'])
  }
  else
  {
    this._Router.navigate(['/owner'])
  }
}


  constructor(private _AuthService:AuthService ,private _Router:Router,private _TranslateService:TranslateService,private _AppComponent:AppComponent) {

    localStorage.setItem('lang','ar')

    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4

    _AuthService.currentUser.subscribe(()=>{


      if(_AuthService.currentUser.getValue() != null)
      {
        this.isLogin = true;
      }
      else
      {
        this.isLogin = false;

      }





    })








  }


user_fun(info:any)
{
  this._AuthService.login(info).subscribe(((data)=>{
    localStorage.setItem("userToken",data.access_token),
    localStorage.setItem("userID",data.user.id),
    localStorage.setItem("Gender",data.user.sex),
    localStorage.setItem("Role",data.role),
    location.reload();

  this._AuthService.saveCurrentUser()
}));
}
}
