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
export class NvbarComponent implements OnInit  {

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


  constructor(private _AuthService:AuthService , _Router:Router,private _TranslateService:TranslateService,private _AppComponent:AppComponent) {


    console.log('saaaaaa')



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
  ngOnInit(): void {
    localStorage.setItem('lang','ar')
  }



}
