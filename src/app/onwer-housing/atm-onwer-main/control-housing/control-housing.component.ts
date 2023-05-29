import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { getElement } from '@microblink/blinkid-in-browser-sdk/ui/dist/types/stencil-public-runtime';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { CreateProductService } from 'src/app/create-product.service';
import { ProOfUserService } from 'src/app/pro-of-user.service';
@Component({
  selector: 'app-control-housing',
  templateUrl: './control-housing.component.html',
  styleUrls: ['../../../student/atm-studen-main/atm-house/houses/houses.component.css','./control-housing.component.css','../atm-housing-onwer/add-housing/add-housing.component.css']
})
export class ControlHousingComponent implements OnInit {

  color1:any
  color2:any
  color3:any
  color4:any


  housing_description_value:any
  Services_devices_value:any
  full_house_vaue:any;

  @Input() add_house:string='block'
  @Input() my_house:string='none'
  images:any=[
    "https://www.3housedesign.es/wp-content/uploads/2019/10/cabecera-1-e1576328242259.png",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/08f41f53-0f95-4e51-99bc-748520404cf3-spain-incredible-rock-house-2.jpg",

  ]


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





  cities=[
    {name: 'New York', code: 'NY', inactive: false},
    {name: 'Rome', code: 'RM', inactive: true},
    {name: 'London', code: 'LDN', inactive: false},
    {name: 'Istanbul', code: 'IST', inactive: true},
    {name: 'Paris', code: 'PRS', inactive: false}
  ]






  type_house_ar=[
    {name: ' نوع السكن', value:''},
    {name: 'شقه كامله', value:'شقه كامله'},
    {name: 'غرفه ', value:'غرفه'},
    {name: 'سرير', value:'سرير'},
    {name: 'شخص', value:'شخص'},
  ]
  type_house_en=[
    {name: 'housing type', value:''},
    {name: 'full flat', value: 'full flat'},
    {name: 'room', value: 'room'},
    {name: 'bed', value: 'bed'},
    {name: 'person', value: 'person'},
  ]


  Floors_ar=[
    {name: 'رقم الطابق', value:''},
    {name: 'الارضي', value:'الارضي'},
    {name: 'الاول ', value:'الاول'},
    {name: 'الثاني ', value:'الثاني'},
    {name: 'الثالث', value:'الثالث'},
    {name: 'الرابع', value:'الرابع'},
    {name: 'الخامس', value:'الخامس'},
    {name: 'السادس', value:'السادس'},
    {name: 'السابع', value:'السابع'},
    {name: 'الثامن', value:'الثامن'},
    {name: 'التاسع', value:'التاسع'},
  ]

  Floors_en=[
    {name: 'floor number', value: ''},
    {name: 'ground', value: 'ground'},
    {name: 'first', value: 'first'},
    {name: 'second', value: 'second'},
    {name: 'third', value: 'third'},
    {name: 'fourth', value: 'fourth'},
    {name: 'v', value: 'v'},
    {name: 'sixth', value: 'sixth'},
    {name: 'seventh', value: 'seventh'},
    {name: 'eighth', value: 'eighth'},
    {name: 'ninth', value: 'ninth'},
  ]



  Num_person_ar=[
    {name: ' سعه الشقه ', value:'واحد'},
    {name: ' (1)  شخص واحد ', value:'واحد'},
    {name: '(2)  شخصان ', value:'اثنان'},
    {name: '(3)  ثلاث  اشخاص', value:'ثلاثه'},
    {name: '(4)   اربعه اشخاص', value:'اربعه'},
    {name: '(5)   خامسه اشخاص', value:'خامسه'},
    {name: '(6)   ستة اشخاص', value:'ستة'},
    {name: '(7)   سبعه اشخاص', value:'سبعه'},
    {name: '(8)   ثمانيه اشخاص', value:'ثمانيه'},

  ]
  Num_person_en=[
    {name: 'apartment capacity', value: 'one'},
    {name: '(1) one person', value: 'one'},
    {name: '(2) two people', value: 'two'},
    {name: '(3) three people', value: 'three'},
    {name: '(4) four people', value: 'four'},
    {name: '(5) fifth persons', value: 'fifth'},
    {name: '(6) six people', value: 'six'},
    {name: '(7) seven people', value: 'seven'},
    {name: '(8) eight people', value: 'eight'},

  ]

  finishing_level_ar=[
    {name:'مستوي التشطيب' , value:''},
    {name:'جيد' , value:'جيد'},
    {name:'متوسط' , value:'متوسط'},
    {name:'ممتاز' , value:'ممتاز'},
    {name:'فاخر' , value:'فاخر'},
  ]
  finishing_level_en=[
    {name:'finishing level' , value:''},
    {name: 'good' , value: 'good'},
    {name: 'medium' , value: 'medium'},
    {name: 'excellent' , value: 'excellent'},
    {name: 'luxury' , value: 'luxury'},
  ]





  num_balcon_ar=[
    {name:'عدد البلكونات' , value:''},
    {name:'بدون' , value:'0'},
    {name:'1' , value:'1'},
    {name:'2' , value:'2'},
    {name:'3' , value:'3'},
    {name:'4' , value:'4'},
    {name:'5' , value:'5'},
    {name:'6' , value:'6'},
  ]
  num_balcon_en=[
    {name:'number of balconies' , value:''},
    {name: 'without' , value: '0'},
    {name:'1' , value:'1'},
    {name:'2' , value:'2'},
    {name:'3' , value:'3'},
    {name:'4' , value:'4'},
    {name:'5' , value:'5'},
    {name:'6' , value:'6'},
  ]





  num_rooms_ar=[
    {name:'عدد الغرف' , value:''},
    {name:'1' , value:'1'},
    {name:'2' , value:'2'},
    {name:'3' , value:'3'},
    {name:'4' , value:'4'},
    {name:'5' , value:'5'},
    {name:'6' , value:'6'},
    {name:'7' , value:'6'},
    {name:'8' , value:'6'},
  ]

  num_rooms_en=[
    {name:'number of rooms' , value:''},
    {name:'1' , value:'1'},
    {name:'2' , value:'2'},
    {name:'3' , value:'3'},
    {name:'4' , value:'4'},
    {name:'5' , value:'5'},
    {name:'6' , value:'6'},
    {name:'7' , value:'6'},
    {name:'8' , value:'6'},
  ]




  num_bathroom_ar=[
    {name:'عدد الحمامات' , value:''},
    {name:'1' , value:'1'},
    {name:'2' , value:'2'},
    {name:'3' , value:'3'},
    {name:'4' , value:'4'},
  ]

  num_bathroom_en=[
      {name:'number of bathrooms' , value:''},
      {name:'1' , value:'1'},
      {name:'2' , value:'2'},
      {name:'3' , value:'3'},
      {name:'4' , value:'4'},
  ]




  num_kitchen_ar=[
    {name:'عدد المطابخ' , value:'1'},
    {name:'1' , value:'1'},
    {name:'2' , value:'2'},
    {name:'3' , value:'3'},
    {name:'4' , value:'4'},
  ]

  num_kitchen_en=[
    {name: 'Number of kitchens' , value: '1'},
    {name:'1' , value:'1'},
    {name:'2' , value:'2'},
    {name:'3' , value:'3'},
    {name:'4' , value:'4'},
  ]

  uploadedFiles: any;
  messageService: any;
  detail: string='';
  flats: string='';


  create_pro(Services_devices_value: any):any
  {
    this._CreateProductService.create_product(Services_devices_value).subscribe((data)=>{
      console.log(data)
      console.log(Services_devices_value)
    })

  }



  constructor(private _messageService: MessageService,private _AppComponent:AppComponent,private _CreateProductService:CreateProductService,private _ProOfUserService:ProOfUserService){

    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4
  }



gg:any;

ggfun()
{
  console.log(this.gg)
}

step1:any
store:any
step1_fun($event:any)
{
  this.step1= JSON.stringify($event.value).slice(1,-1)
  console.log(this.step1)
}
step2:any
step2_fun($event:any)
{
  this.step2= JSON.stringify($event.value).slice(1,-1)
  this.store='{'+this.step1+','+this.step2+'}'


  console.log(JSON.parse(this.store) )
}
step4:any
step4_fun($event:any)
{
  console.log($event)
}

  housing_description = new FormGroup({
    owner_id: new FormControl(localStorage.getItem('userID') ),
    rate_of_owner: new FormControl(null ),
    type_of_house:new FormControl(null ),
    number_of_student_needed:new FormControl(null ),
    number_of_rooms:new FormControl(null ),
    number_of_beds:new FormControl(null ),
    price:new FormControl(null),
    finishing_level:new FormControl(null ),
    Floors:new FormControl(null ),
    description:new FormControl(null),
    space:new FormControl(null),
    balcony:new FormControl(null ),
    kitchen:new FormControl(null ),
    bathroom:new FormControl(null ),
  })
  Services_devices = new FormGroup({

    water: new FormControl(null ),
    gas:new FormControl(null ),
    internet:new FormControl(null ),
    elevator: new FormControl(null ),
    aircondition:new FormControl(null ),
    Washing_Machine: new FormControl(null ),
    Tv: new FormControl(null ),
    radio: new FormControl(null ),
    refrigerator: new FormControl(null ),
    heater: new FormControl(null ),
    fan: new FormControl(null ),
    water_filter: new FormControl(null),
    playstation: new FormControl(null ),
  })
  house_picture = new FormGroup({

    product_photo : new FormControl(null),

  })


  details()
  {
    this.detail='block'
    this.flats='none'
  }


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

    pro_of_user:any
    ngOnInit() {

      this._ProOfUserService.get_all_product().subscribe(result =>{
        this.pro_of_user=result

      })
    }



}
