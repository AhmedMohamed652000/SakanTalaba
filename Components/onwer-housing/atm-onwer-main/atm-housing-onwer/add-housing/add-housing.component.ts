import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { OwnerAdsService } from 'src/app/owner-ads.service';
import { ProOfUserService } from 'src/app/pro-of-user.service';
import { RequestWaitService } from 'src/app/request-wait.service';
import { TalabatMohinaService } from 'src/app/talabat-mohina.service';
import { ProductDateService } from './../../../../product-date.service';

@Component({
  selector: 'app-add-housing',
  templateUrl: './add-housing.component.html',
  styleUrls: ['../../../../student/atm-studen-main/atm-house/houses/houses.component.css','../../control-housing/control-housing.component.css','../../../../student/atm-studen-main/atm-house/friend/friend.component.css','./add-housing.component.css']
})
export class AddHousingComponent implements OnInit {

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

  @Input() my_ads:boolean=false
  @Input() new_ads:boolean=true
  @Input() requests:boolean=false
  wait='block '
  accept='none '
  control='none'
  friends_color="#00ADB5"
  req_rcieve_color="#EEEEEE"
  req_send_color="#EEEEEE"
  friends_color_2="white"
  req_rcieve_color_2="black"
  req_send_color_2="black"
  wait2='flex'
  accept2='none'
  control2='none'
  friends_color2="#00ADB5"
  req_rcieve_color2="#EEEEEE"
  req_send_color2="#EEEEEE"
  friends_color_22="white"
  req_rcieve_color_22="black"
  req_send_color_22="black"

  cities=[
    {name: 'New York', code: 'NY', inactive: false},
    {name: 'Rome', code: 'RM', inactive: true},
    {name: 'London', code: 'LDN', inactive: false},
    {name: 'Istanbul', code: 'IST', inactive: true},
    {name: 'Paris', code: 'PRS', inactive: false}
  ]


  friends_fun()
  {
    this.wait="block !important"
    this.accept="none !important"
    this.control="none !important"
    this.friends_color="#00ADB5"
    this.req_rcieve_color="#EEEEEE"
    this.req_send_color="#EEEEEE"
    this.friends_color_2="white"
    this.req_rcieve_color_2="black"
    this.req_send_color_2="black"
  }
  req_rcieve_fun()
  {
    this.wait="none !important"
    this.accept="block !important"
    this.control="none !important"
    this.friends_color="#EEEEEE"
    this.req_rcieve_color="#00ADB5"
    this.req_send_color="#EEEEEE"
    this.friends_color_2="black"
    this.req_rcieve_color_2="white"
    this.req_send_color_2="black"
  }
  req_send_fun()
  {
    this.wait="none !important"
    this.accept="none !important"
    this.control="block !important"
    this.friends_color="#EEEEEE"
    this.req_rcieve_color="#EEEEEE"
    this.req_send_color="#00ADB5"
    this.friends_color_2="black"
    this.req_rcieve_color_2="black"
    this.req_send_color_2="white"
  }
  friends_fun2()
  {
    this.wait2="flex"
    this.accept2="none"
    this.control2="none"
    this.friends_color2="#00ADB5"
    this.req_rcieve_color2="#EEEEEE"
    this.req_send_color2="#EEEEEE"
    this.friends_color_22="white"
    this.req_rcieve_color_22="black"
    this.req_send_color_22="black"
  }
  req_rcieve_fun2()
  {
    this.wait2="none"
    this.accept2="flex"
    this.control2="none"
    this.friends_color2="#EEEEEE"
    this.req_rcieve_color2="#00ADB5"
    this.req_send_color2="#EEEEEE"
    this.friends_color_22="black"
    this.req_rcieve_color_22="white"
    this.req_send_color_22="black"
  }
  req_send_fun2()
  {
    this.wait2="none"
    this.accept2="none"
    this.control2="flex"
    this.friends_color2="#EEEEEE"
    this.req_rcieve_color2="#EEEEEE"
    this.req_send_color2="#00ADB5"
    this.friends_color_22="black"
    this.req_rcieve_color_22="black"
    this.req_send_color_22="white"
  }

  lat = 51.678418;
  lng = 7.809007;

  housing_description = new FormGroup({

    type_of_house:new FormControl(null ,Validators.required),
    number_of_student_needed:new FormControl(null ,Validators.required),
    number_of_rooms:new FormControl(null ,Validators.required),
    number_of_beds:new FormControl(null ,Validators.required),
    price:new FormControl(null ,Validators.required),
    finishing_level:new FormControl(null ,Validators.required),
    Floors:new FormControl(null ,Validators.required),
    description:new FormControl(null),
    space:new FormControl(null ,Validators.required),
    balcony:new FormControl(null ,Validators.required),
    kitchen:new FormControl(null ,Validators.required),
    bathroom:new FormControl(null ,Validators.required),
  })
  Services_devices = new FormGroup({

    water:new FormControl(null  ),
    internet:new FormControl(null),
    Washing_Machine:new FormControl(null),
    fan:new FormControl(null),
    // Electricity:new FormControl(null , [Validators.required]),
    // elevator:new FormControl(null,[Validators.required,]),
    // fridge:new FormControl(null,[Validators.required,]),
    // land_line:new FormControl(null,[Validators.required]),
    // gas:new FormControl(null , [Validators.required]),
    // air_conditioner:new FormControl(null,[Validators.required,]),
    // cooker:new FormControl(null,[Validators.required,]),
    // water_filter:new FormControl(null,[Validators.required]),
    // heater:new FormControl(null,[Validators.required]),
    // radio:new FormControl(null,[Validators.required]),
    // iron:new FormControl(null,[Validators.required]),
    // tv:new FormControl(null,[Validators.required]),

  })

  stop_ads(id:any)
  {
    this._OwnerAdsService.stop_ads(id).subscribe((data) => {
      this._OwnerAdsService.get_owner_ads(localStorage.getItem('userID')).subscribe((data)=>{
        this.owner_ads=data
      })

    })
  }
  public(id:any)
  {
    this._OwnerAdsService.public(id).subscribe((data) => {
      this._OwnerAdsService.get_owner_ads(localStorage.getItem('userID')).subscribe((data)=>{
        this.owner_ads=data
      })

    })
  }
  delete_ads(id:any)
  {
    this._OwnerAdsService.delete_ads(id).subscribe((data) => {
      this._OwnerAdsService.get_owner_ads(localStorage.getItem('userID')).subscribe((data)=>{
        this.owner_ads=data
      })

    })
  }


  talabat_mohaina_satatus0(id:any)
  {
    this._TalabatMohinaService.talabat_mohaina_satatus0(id).subscribe((data) => {
      this._TalabatMohinaService.talabat_mohaina().subscribe((data)=>{
        this.talabatOfOwner = data
      })

    })
  }

  talabat_mohaina_satatus5(id:any)
  {
    this._TalabatMohinaService.talabat_mohaina_satatus5(id).subscribe((data) => {
      this._TalabatMohinaService.talabat_mohaina().subscribe((data)=>{
        this.talabatOfOwner = data
      })

    })
  }

  talabat_mohaina_satatus1(id:any)
  {
    this._TalabatMohinaService.talabat_mohaina_satatus1(id).subscribe((data) => {
      this._TalabatMohinaService.talabat_mohaina().subscribe((data)=>{
        this.talabatOfOwner = data
      })

    })
  }

  talabat_mohaina_satatus2(id:any)
  {
    this._TalabatMohinaService.talabat_mohaina_satatus2(id).subscribe((data) => {
      this._TalabatMohinaService.talabat_mohaina().subscribe((data)=>{
        this.talabatOfOwner = data
      })

    })
  }

  talabat_mohaina_satatus3(id:any)
  {
    this._TalabatMohinaService.talabat_mohaina_satatus3(id).subscribe((data) => {
      this._TalabatMohinaService.talabat_mohaina().subscribe((data)=>{
        this.talabatOfOwner = data
      })

    })
  }
















  request_wait:any;
  request_wait_fun()
  {


    this._RequestWaitService.request_wait('3').subscribe((data:any)=>{

      this.request_wait =  this.request_wait+data
      console.log(this.request_wait)
    })

  }

owner_ads:any

ads_id:any;
  constructor(private _formBuilder: FormBuilder,private messageService: MessageService,private _AppComponent:AppComponent,private _ProductDateService:ProductDateService  , private _ProOfUserService:ProOfUserService
    ,private _RequestWaitService:RequestWaitService,
    private _OwnerAdsService:OwnerAdsService,
    private _TalabatMohinaService:TalabatMohinaService

    ) {


      this._OwnerAdsService.get_owner_ads(localStorage.getItem('userID')).subscribe((data)=>{
        this.owner_ads=data
        console.log(this.owner_ads)
      })

      this._OwnerAdsService.get_owner_ads(localStorage.getItem('userID')).subscribe((data)=>{
        this.owner_ads=data
      })





      this.request_wait_fun();

      this._ProOfUserService.get_all_product().subscribe((data)=>{
        console.log(data)


      })


    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4



  }

  uploadedFiles: any[] = [];


  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    console.log(this.uploadedFiles)
}
en:any


  title = 'google-maps';

  days_ar=[
    {name:'اليوم',value:''},
    {name:'السبت',value:'السبت'},
    {name:'الاحد',value:'الاحد'},
    {name:'الاثنين',value:'الاثنين'},
    {name:'الثلاثاء',value:'الثلاثاء'},
    {name:'الاربعاء',value:'الاربعاء'},
    {name:'الخميس',value:'الخميس'},
    {name:'الجمعة',value:'الجمعة'},
  ]

  days_en=[
    {name:'Day',value:''},
    {name:'Saturday',value:'Saturday'},
    {name:'Sunday',value:'Sunday'},
    {name: 'Monday',value: 'Monday'},
    {name: 'Tuesday',value: 'Tuesday'},
    {name:'Wednesday',value:'Wednesday'},
    {name:'Thursday',value:'Thursday'},
    {name:'Friday',value:'Friday'},
  ]
  public map: any
  es: any;
  date2:any;
  proOfUser:any
 talabatOfOwner:any
 User_info:any;
 User_contact:any;

 get_profile_id(data:any){

  this._TalabatMohinaService.get_profile_id(data).subscribe((data)=>{
    this.User_info=data

    console.log(this.User_info)
  })

}
 get_profile_id_drop($event:any){

  this._TalabatMohinaService.get_profile_id($event.value).subscribe((data)=>{
    this.User_info=data

    console.log($event)
  })

}
get_profile_contact_drop($event:any){

  this._TalabatMohinaService.get_profile_id($event.value).subscribe((data)=>{
    this.User_contact=data

    console.log(this.User_info)
  })

}

get_profile_contact(data:any){

  this._TalabatMohinaService.get_profile_id(data).subscribe((data)=>{
    this.User_contact=data

    console.log(this.User_info)
  })

}

ff:any
  ngOnInit(): void {


    this._ProOfUserService.get_all_product().subscribe((data)=>{
      this.proOfUser = data
      console.log(this.proOfUser)
    })

    this._TalabatMohinaService.talabat_mohaina().subscribe((data)=>{
      this.talabatOfOwner = data

    })






    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }
  }

  images:any=[
    "https://www.3housedesign.es/wp-content/uploads/2019/10/cabecera-1-e1576328242259.png",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/08f41f53-0f95-4e51-99bc-748520404cf3-spain-incredible-rock-house-2.jpg",

  ]


  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];


  get_date = new FormGroup({

    date1:new FormControl(null),
    date2:new FormControl(null),
    date3:new FormControl(null),
    From1:new FormControl(null),
    From2:new FormControl(null),
    From3:new FormControl(null),
    To1:new FormControl(null),
    To2:new FormControl(null),
    To3:new FormControl(null),
    notes:new FormControl(null),
    product_id:new FormControl(null),
  })


  get_pro_date(data:any)
  {
    this._ProductDateService.get_pro_Date(data).subscribe((data:any)=>{

    })
  }



}
