import { AfterViewInit, Component , ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UniversityService } from './../university.service';
import { EventReady, EventScanError, EventScanSuccess, SDKError } from '@microblink/blinkid-in-browser-sdk/ui/dist/types/utils/data-structures';
import '@microblink/blinkid-in-browser-sdk/ui/dist';
import { identifierName } from '@angular/compiler';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  images:any =[
    "../../assets/image/logo_modern.png",
    "../../assets/image/Rectangle 9.png",
    "../../assets/image/Rectangle 11.png",
    "../../assets/image/Rectangle 12.png",
    "../../assets/image/Rectangle 9.png",
    "../../assets/image/Rectangle 13.png",
    "../../assets/image/Rectangle 15.png",
    "../../assets/image/Rectangle 14.png",
    "../../assets/image/Rectangle 16.png",
    "../../assets/image/Rectangle 17.png",
    "../../assets/image/Rectangle 13.png",
  ]

  responsiveOptions;
  responsiveOptions2;

  color1:any
  color2:any
  color3:any
  color4:any

  constructor(private http: HttpClient ,private _Router:Router , private _UniversityService:UniversityService,private _AppComponent:AppComponent){
    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4

  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 7,
        numScroll: 7
    },
    {
        breakpoint: '768px',
        numVisible: 6,
        numScroll: 6
    },
    {
        breakpoint: '560px',
        numVisible: 6,
        numScroll: 6
    }
    ,
    {
        breakpoint: '300px',
        numVisible: 5,
        numScroll: 5
    }
];
  this.responsiveOptions2 = [

      {
        breakpoint: '300px',
        numVisible: 3,
        numScroll: 1
    }
];


  }
hh=false


  routerLink()
  {
    this._Router.navigate(["studen"])

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


kolia:any=[]
// getunivirsity()
//   {
//     this._UniversityService.getUniversity().subscribe(data=>
//     {
//       this.kolia = data
//       this.hh=true

//     },()=>{
//       console.log("error")
//     })
//   }


ngOnInit(): void {

  // this.getunivirsity();




}

scanner:any;



}

