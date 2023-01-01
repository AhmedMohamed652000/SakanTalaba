import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { FormControl, FormGroup } from '@angular/forms';
import { ChangePasswordService } from './../../../../change-password.service';
import { CreditService } from './../../../../credit.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {


  color1:any
  color2:any
  color3:any
  color4:any




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






  @Input() option_more:boolean = false;
  @Input() option_main:boolean = true;
  @Input() option_subscribers:boolean = false;
  change_password_active='none'
  hide=true
  change_password_active_fun()
  {
    this.change_password_active='flex'
    this.change_true='none'
  }
  change_true='flex'
  change_email="none"
  change_password=false

  change_email_fun()
  {
    this.change_email="flex"
    this.change_password=false
    this.change_true='none'

  }
  change_password_fun()
  {
    this.change_email="none"
    this.change_password=true
    this.change_true='flex'

  }

  back_email_fun()
  {
    this.change_email="none"
    this.change_password=false
    this.change_true='flex'
    this.change_password_active='none'
  }

  constructor(private _HttpClient:HttpClient,private _ChangePasswordService:ChangePasswordService,private _CreditService:CreditService,private _DomSanitizer:DomSanitizer,private _AppComponent:AppComponent ) {

    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4

    if (this.load != null)
    {
      this.load2=this.load

    }

   }
   new_password(data:any)
   {
      return this._ChangePasswordService.change_password_fun(data).subscribe()
   }


    new_pass = new FormGroup({
      old_password: new FormControl('null'),
      password: new FormControl('null'),
      password_confirmation: new FormControl('null'),


    })


    api_ket:any={
      "api_key": "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SnVZVzFsSWpvaWFXNXBkR2xoYkNJc0ltTnNZWE56SWpvaVRXVnlZMmhoYm5RaUxDSndjbTltYVd4bFgzQnJJam95TWpRMk5qUjkuSVcyN2FZUE9pc3BWWmtSdmdQTG1wTHVZTzdwZjlEUXVMclE1MlFnNHRIazlwZHJEcmZsbGI1RVRNOXQ3ZEp0Mkd0bjBvUjl5VWxmMGFpYTJjMndzWHc="
    }
    save_token:any


save_id:any


token_payment:any
step3={
  "auth_token": localStorage.getItem('token_auth_pay1'),
  "amount_cents": "3000",
  "expiration": 360000000,
  "order_id": localStorage.getItem('save_id2'),
  "billing_data": {
    "apartment": "803",
    "email": "claudette09@exa.com",
    "floor": "42",
    "first_name": "Clifford",
    "street": "Ethan Land",
    "building": "8028",
    "phone_number": "+86(8)9135210487",
    "shipping_method": "PKG",
    "postal_code": "01898",
    "city": "Jaskolskiburgh",
    "country": "CR",
    "last_name": "Nicolas",
    "state": "Utah"
  },
  "currency": "EGP",
  "integration_id": 2002414,
  "lock_order_when_paid": "false"
}

step1()
{
  this._CreditService.get_token(this.api_ket).subscribe((data)=>{
    this.save_token=data

    localStorage.setItem("token_auth_pay1",this.save_token.token)
    console.log( this.save_token)
  })
}


step2= {
  "auth_token":  localStorage.getItem('token_auth_pay1'),
"delivery_needed": "false",
"amount_cents": "3000",
"currency": "EGP",
"merchant_order_id": 25452,
"items": [
  {
      "name": "student_30",
      "amount_cents": "3000",
      "quantity": "1"
  }
  ],
"shipping_data": {
  "apartment": "803",
  "email": "claudette09@exa.com",
  "floor": "42",
  "first_name": "Clifford",
  "street": "Ethan Land",
  "building": "8028",
  "phone_number": "+86(8)9135210487",
  "postal_code": "01898",
   "extra_description": "8 Ram , 128 Giga",
  "city": "Jaskolskiburgh",
  "country": "CR",
  "last_name": "Nicolas",
  "state": "Utah"
},
  "shipping_details": {
      "notes" : " test",
      "number_of_packages": 1,
      "weight" : 1,
      "weight_unit" : "Kilogram",
      "length" : 1,
      "width" :1,
      "height" :1,
      "contents" : "product of some sorts"
  }
}

step2_fun()
{
  this._CreditService.get_order(this.step2).subscribe((data)=>{
    this.save_id=data
    console.log(data)
    localStorage.setItem("save_id2",this.save_id.id)

  })

}
load = new BehaviorSubject('null');


test5:any;
step3_fun()
{
  this._CreditService.get_payment_token(this.step3).subscribe((data)=>{
    this.token_payment=data;
    console.log(data)
    localStorage.setItem("token_payment44",this.token_payment.token)
    this.test5=this._DomSanitizer.bypassSecurityTrustResourceUrl(`https://accept.paymobsolutions.com/api/acceptance/iframes/373408?payment_token=${localStorage.getItem("token_payment44")}`)
  })

}

load2:any;


  ngOnInit() {

this.step1()


console.log(this.load)


  }

}
