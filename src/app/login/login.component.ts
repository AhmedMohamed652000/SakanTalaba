import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  color1:any
  color2:any
  color3:any
  color4:any

  info_users:any=[]

  ngOnInit(): void {
  }

  error:string='';

  hide = true;
  hide2 = true;

  kolia= [
         {name: 'modern'},
        {name: 'Dog'},
         {name: 'Dog'},
         {name: 'Dog'},
  ]




  constructor(private _AuthService:AuthService,private _Router:Router,private _AppComponent:AppComponent) {
    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4
  }
gg:any
  submitregister(loginForm:FormGroup)
  {
        this._AuthService.login(loginForm.value).subscribe(((data)=>{
          this.gg=data?.user
          localStorage.setItem("userToken",data.access_token),
          localStorage.setItem("userID",data.user.id),
          localStorage.setItem("Gender",data.user.sex),
          localStorage.setItem("User_Info",JSON.stringify(this.gg)),

          this._AuthService.saveCurrentUser()

          if (data.role == 'user')
          {
            this._Router.navigate(['/student']);
          }
          else if(data.role == 'owner')
          {
            this._Router.navigate(['/owner']);
          }
          else
          {
            console.log('')
          }
        }));
  }



  loginForm = new FormGroup({

    // ArName:new FormControl(null , [Validators.required,Validators.minLength(3),Validators.maxLength(35),Validators.pattern('^[\u0621-\u064A]+$')]),
    // name:new FormControl(null , [Validators.required,Validators.minLength(3),Validators.maxLength(35),Validators.pattern('[a-zA-Z]+$')]),
    // id:new FormControl(null, [Validators.required]),
    // Phone:new FormControl(null),
    email:new FormControl(null , [Validators.email]),
    password:new FormControl(null,[Validators.required,]),
    //  password_confirmation:new FormControl(null),
    // gender:new FormControl(null),
    // kolia:new FormControl(null,Validators.required),


  })



}
