import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventReady, EventScanError, EventScanSuccess, SDKError } from '@microblink/blinkid-in-browser-sdk/ui/dist/types/utils/data-structures';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  university:any;


  role='user'


  color1:any
  color2:any
  color3:any
  color4:any

  isLinear = false;
  next= true;
  firstFormGroup: any;
  secondFormGroup: any;
  data:any;



  d = '29607220103693'




  gender_fromId=Number( this.d.slice(12,13));
  day= Number(this.d.slice(5,7));
  month=Number( this.d.slice(3,5));
  year=Number(this.d.slice(1,3));
  year_num=Number(this.d.slice(0,1));

  get_full_year()
  {
    if(this.year_num == 2)
    {
      this.year+=1900
      console.log(this.year)
    }else{
      this.year+=2000
      console.log(this.year)
    }

  }

  gender_fun(){

    if(this.gender_fromId % 2 == 0)
    {
      console.log("female");


    }
    else{
      console.log('male');

    }

  }



  @ViewChild('el') el!: ElementRef<HTMLBlinkidInBrowserElement>;
ngAfterViewInit(): void {
  this.el.nativeElement.licenseKey = 'sRwAAAYJbG9jYWxob3N0r/lOPk4/w35CpJmmKuUfwQG/M5Aj/R/sm+fLC7g5KdrAq5kOnlCofVNmuVNwcKixzd94de+TeJ+axIkYPHkuwu7sPafUS+Fd7spSoorLOSEEALV5b0DE4Hbwr4uUB750tA+oB9yK2VQkCAhD1VRaAaCB5fdsGBnY747McuwO+qLYpAk4mejM0ZVycrJRwEIub+jLC43EboCF6h60WLHem+CAtoK28q5yFh8lCm5JcoSJOMdU3BQULVHHTu5/H8dj3PR6/S2IbHz3Ew+l29pdNgMBIDZqm3NgvW9ziWqPXhdlavTQNdpz/u03Tresx+WiustrhYKBtaEIK5opX4TDcE4=';
  this.el.nativeElement.recognizers = [ 'BlinkIdRecognizer' ];

  // Engine location depends on the actual location of WebAssembly resources
  this.el.nativeElement.engineLocation = window.location.origin + '/blinkid-resources/';

  this.el.nativeElement.addEventListener('ready', (ev: CustomEventInit<EventReady>) => {
    console.log('ready', ev.detail);
  });

  this.el.nativeElement.addEventListener('scanSuccess', (ev: CustomEventInit<EventScanSuccess>) => {
    console.log('scanSuccess', ev.detail?.recognizer);
    this.data=[ev.detail?.recognizer];

    this.next=false

  });

  this.el.nativeElement.addEventListener('scanError', (ev: CustomEventInit<EventScanError>) => {
    console.log('scanError', ev.detail);
  });

  this.el.nativeElement.addEventListener('fatalError', (ev: CustomEventInit<SDKError>) => {
    console.log('fatalError', ev.detail);
  });
}


  error:string='';
  value4:string=''

  registerForm = new FormGroup({

    name:new FormControl(null,[Validators.required]),
    NationalID:new FormControl(null,[Validators.required]),
    // NationalID:new FormControl(null, [Validators.required ,Validators.minLength(14),Validators.maxLength(14)]),
    phone:new FormControl(null,[Validators.required]),
    email:new FormControl(null , [Validators.email]),
    password:new FormControl(null,[Validators.required]),
    password_confirmation:new FormControl(null,[Validators.required]),
    sex:new FormControl(null,[Validators.required,]),
    univirsity_id:new FormControl(null),
    role_name:new FormControl(this.role)



  })


  constructor(private _AuthService:AuthService,private _Router:Router,private _formBuilder: FormBuilder,private _AppComponent:AppComponent,private _UniversityService:UniversityService) {

    this._UniversityService.getUniversity().subscribe((data)=>{

      this.university=data
      console.log(data)

    })

    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4
  }

  submitregister(registerForm:FormGroup)
  {

    console.log(this.registerForm.value)


        this._AuthService.register(registerForm.value).subscribe((data)=>{
          this._Router.navigate(['/login']);

          // if (data.message == 'success')
          // {
          //   this._Router.navigate(['/home']);
          // }
          // else
          // {
          //   // this.error = data.errors.email.message;
          //   console.log(data.message.json)

          // }
        });
  }


  hide = true;
  hide2 = false;

  kolia= [
         {name: 'modern'},
        {name: 'Dog'},
         {name: 'Dog'},
         {name: 'Dog'},
  ]













  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    console.log(this.day,"day");
    console.log(this.month,'month');
    console.log(this.year,'year');
    console.log(

    );



  }










}
