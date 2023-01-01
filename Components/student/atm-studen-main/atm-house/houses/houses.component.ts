import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { concatMap, tap } from 'rxjs/operators';
import { AllRelationFriendsService } from 'src/app/all-relation-friends.service';
import { AppComponent } from 'src/app/app.component';
import { GetProductService } from 'src/app/get-product.service';
import { RatingStudentService } from 'src/app/rating-student.service';
import { ReqquestProductService } from 'src/app/reqquest-product.service';
import { TalabatMohinaStudentService } from 'src/app/talabat-mohina-student.service';
import { TalabatMohinaService } from 'src/app/talabat-mohina.service';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['../../atm-house/request/request.component.css','../../../../onwer-housing/atm-onwer-main/control-housing/control-housing.component.css','./houses.component.css']
})
export class HousesComponent implements OnInit {

  color1:any
  color2:any
  color3:any
  color4:any

  @Input() houses_data: string ='true'
  @Input() houses_requests: string ='none'
  @Input()  houses_map: string ='none'
  @Input()  my_house: string ='none'

  imagesw:any=[
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




  displayBasic2: any;
  allproduct:any=[]
  ff:string='';
  finishing_level_menu_ar=[
    {word:'الغاء' , value:''},
    {word:'جيد' , value:'جيد'},
    {word:'متوسط' , value:'متوسط'},
    {word:'ممتاز' , value:'ممتاز'},
    {word:'فاخر' , value:'فاخر'},
  ]
  finishing_level_menu_en=[
    {word:'Cancel' , value:''},
    {word: 'good' , value: 'good'},
    {word: 'medium' , value: 'medium'},
    {word: 'excellent' , value: 'excellent'},
    {word: 'luxury' , value: 'luxury'},
  ]


  distance_of_college_menu_ar:any=[
    {word:'الغاء' , value:''},
    {word:'اقل من   500م ' , value:'500'},
    {word:'اقل من   1000م ' , value:'1000'},
    {word:'اقل من  1.5 ك ' , value:'1500'},
    {word:'اقل من  2 ك ' , value:'2000'},
    {word:'اقل من  2.5 ك ' , value:'2500'},
    {word:'اقل من  3 ك ' , value:'3000'},
    {word:'اقل من  3.5 ك ' , value:'3500'},
  ]
  distance_of_college_menu_en:any=[
        {word:'Cancel' , value:''},
        {word: 'less than 500 m' , value: '500'},
        {word: 'less than 1000 m' , value: '1000'},
        {word: 'less than 1.5 k' , value: '1500'},
        {word: 'less than 2 k' , value: '2000'},
        {word: 'less than 2.5 k' , value: '2500'},
        {word: 'less than 3 k' , value: '3000'},
        {word: 'less than 3.5 k' , value: '3500'},
  ]



  Price_menu_ar:any=[
    {word:'الغاء' , value:''},
    {word:'اقل من   500 ج.م ' , value:'500'},
    {word:'اقل من  1000  ج.م ' , value:'1000'},
    {word:'اقل من  1500  ج.م ' , value:'1500'},
    {word:'اقل من  2000  ج.م ' , value:'2000'},
    {word:'اقل من  2500 ج.م ' , value:'2500'},
    {word:'اقل من  3000  ج.م ' , value:'3000'},
    {word:'اقل من  3500  ج.م ' , value:'3500'},
    {word:'اقل من  4000  ج.م ' , value:'4000'},
  ]

  Price_menu_en:any=[
    {word:'Cancel' , value:''},
    {word: 'less than 500 LE ' , value: '500'},
    {word: 'less than 1000 EGP ' , value: '1000'},
    {word: 'less than 1500 EGP ' , value: '1500'},
    {word: 'less than 2000 EGP' , value: '2000'},
    {word: 'less than 2500 EGP ' , value: '2500'},
    {word: 'less than 3000 EGP ' , value: '3000'},
    {word: 'less than 3500 LE ' , value: '3500'},
    {word: 'less than 4000 EGP ' , value: '4000'},
  ]



  type_of_house_menu_ar:any=[

    {word:'الغاء' , value:''},
    {word:'شقة كامله' , value:'شقه'},
    {word:'عدد الغرف' , value:'غرفه'},
    {word:'عدد السراير' , value:'سرير'},
    {word:'عدد الاشخاص المتاحه' , value:'اشخاص'},
  ]

  type_of_house_menu_en:any=[

    {word:'Cancel' , value:''},
    {word: 'full flat' , value: 'apartment'},
    {word: 'number of rooms' , value: 'rooms'},
    {word: 'number of beds' , value: 'bed'},
    {word: 'Number of people available' , value: 'People'},
  ]


  images2:any =[
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
    "assets/image/CLOUD.png",
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
    "assets/image/logo_modern.png",
  ]

 search_house ="block";
 request_show='none'
 search_house_details='none';
 activeIndex: any;
  displayCustom: any;
 request_show_fun()
 {
  this.request_show='block'
  this.search_house_details='none'

 }



  more_details()
  {
    this.search_house ="none";
    this.houses_data='none'
    this.search_house_details='flex'
    this.request_show='none'
  }
  more_details_hidden()
  {
    this.search_house ="none";
    this.houses_data='none'
    this.search_house_details='flex'
    this.request_show='none'
  }



  search_house_details_fun()
  {
    this.search_house ="block";
    this.houses_data='block'

    this.search_house_details='none'
    this.request_show='none'


  }

  accept_mohayna_color2='black'
  accept_mohayna_color='#EEEEEE'
  wait_request_color='#00ADB5'
  accept_request_color='#EEEEEE'
  wait_request_color2='white'
  accept_request_color2='black'
  wait='block'
  accept='none'
  accept_mohaina='none'
  wait_request_fun()
  {
    this.wait_request_color='#00ADB5'
    this.accept_request_color='#EEEEEE'
    this.wait_request_color2='white'
    this.accept_request_color2='black'
    this.wait='block'
    this.accept='none'
    this.accept_mohaina='none'
    this.accept_mohayna_color='#EEEEEE'
    this.accept_mohayna_color2='black'
  }

  accept_request_fun()
  {
    this.wait_request_color='#EEEEEE'
    this.accept_request_color='#00ADB5'
    this.wait_request_color2='black'
    this.accept_request_color2='white'
    this.wait='none'
    this.accept='block'
    this.accept_mohaina='none'
    this.accept_mohayna_color='#EEEEEE'
    this.accept_mohayna_color2='black'

  }
  accept_mohayna_fun()
  {
    this.wait_request_color='#EEEEEE'
    this.accept_request_color='#EEEEEE'
    this.wait_request_color2='black'
    this.accept_request_color2='black'
    this.wait='none'
    this.accept='none'
    this.accept_mohaina='block'
    this.accept_mohayna_color='#00ADB5'
    this.accept_mohayna_color2='white'

  }

  val3=3
  xx:any=[] ;

  sortOptions: SelectItem[]=[];
  images: any[]=[];
  sortOrder: number=0;
data=true
  sortField: string='';

  get_rating_users:any
  get_rating_users_fun(id:any)
  {
    this._RatingStudentService.get_rating_users(id).subscribe((data)=>{
      this.get_rating_users=data
    })
  }

  show_rating_users:any
  show_rating_users_fun(id:any)
  {
    this._RatingStudentService.get_rating_users(id).pipe()


    .subscribe((data)=>{
      this.show_rating_users=data
    })
  }

  add_rating_users:any
  raingform = new FormGroup({
    stars_rated:new FormControl(null)
  })
  add_rating_users_fun(data:any,id:any)
  {
    this._RatingStudentService.add_rating_users(data,id).subscribe((data)=>{
      this.add_rating_users=data
    })
  }



  request_product(data:any, id:any)
  {
    this._ReqquestProductService.request_product(data,id).subscribe(data=>{})
  }

  requestform = new FormGroup({

    friends_selection:new FormControl(null,),
    date1:new FormControl(null,),
    date2:new FormControl(null,),


  })

  get_value(asd:any)

  {

  }





  constructor(private _GetProductService:GetProductService, private primengConfig: PrimeNGConfig,private _AppComponent:AppComponent,private _TalabatMohinaStudentService:TalabatMohinaStudentService,private _TalabatMohinaService:TalabatMohinaService,private _AllRelationFriendsService:AllRelationFriendsService,private _RatingStudentService:RatingStudentService,private _ReqquestProductService:ReqquestProductService) {

    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4





    this._GetProductService.get_all_product("","","","").subscribe((data)=>{
      this.allproduct=data.data

      console.log(this.allproduct)

    })

  }

  cont(id:any)
  {
    this._GetProductService.count(id)
  }

  finishing_level:string=""
  type_of_house:string=""
  price:string=""
  distance_of_college:string=""
  filter()
  {
    this._GetProductService.get_all_product(this.distance_of_college,this.finishing_level,this.price,this.type_of_house).subscribe((data)=>{
      this.allproduct=data.data

      console.log(this.allproduct)
      console.log(this.finishing_level)

    })
  }


  one_pro:any=[]
  get_one_prod(id:any)
  {
    this._GetProductService.get_one_product(id).subscribe((data)=>{

      this.one_pro=data
      console.log(data)


    })
  }


  talabat_mohaina_satatus0(id:any)
  {
    this._TalabatMohinaStudentService. talabat_mohaina_satatus0(id).subscribe((data) => {
      this._TalabatMohinaStudentService.talabat_mohaina_student().subscribe((data)=>{
        this.talabatOfstudent = data
      })

    })
  }

  talabat_mohaina_satatus1(id:any)
  {
    this._TalabatMohinaStudentService. talabat_mohaina_satatus1(id).subscribe((data) => {
      this._TalabatMohinaStudentService.talabat_mohaina_student().subscribe((data)=>{
        this.talabatOfstudent = data
      })

    })
  }

  talabat_mohaina_satatus2(id:any)
  {
    this._TalabatMohinaStudentService. talabat_mohaina_satatus2(id).subscribe((data) => {
      this._TalabatMohinaStudentService.talabat_mohaina_student().subscribe((data)=>{
        this.talabatOfstudent = data
      })

    })
  }
  talabat_mohaina_satatus4(id:any)
  {
    this._TalabatMohinaStudentService. talabat_mohaina_satatus4(id).subscribe((data) => {
      this._TalabatMohinaStudentService.talabat_mohaina_student().subscribe((data)=>{
        this.talabatOfstudent = data
      })

    })
  }


  talabat_mohaina_satatus0_onwer(id:any)
  {
    this._TalabatMohinaService.talabat_mohaina_satatus0(id).subscribe((data) => {
      this._TalabatMohinaStudentService.talabat_mohaina_student().subscribe((data)=>{
        this.talabatOfstudent = data
      })

    })
  }

  talabat_mohaina_satatus1_onwer(id:any)
  {
    this._TalabatMohinaService.talabat_mohaina_satatus1(id).subscribe((data) => {
      this._TalabatMohinaStudentService.talabat_mohaina_student().subscribe((data)=>{
        this.talabatOfstudent = data
      })

    })
  }





  talabatOfstudent:any
  talabatOfstudent_frind:any
  talabatOfOwner:any
  ww:any

  UserInfo:any
  friends:any;
  ngOnInit(): void {

    localStorage.setItem('owner_id','null' )

    this._TalabatMohinaService.talabat_mohaina().subscribe((data)=>{
      this.talabatOfOwner = data

    })

    this._AllRelationFriendsService.get_all_relations().subscribe((data)=>{
      this.friends=data.frinds
      this.UserInfo=JSON.parse( localStorage.getItem('User_Info') || 'none info' )
      console.log(this.friends)
      console.log(this.UserInfo)
    })


    this._TalabatMohinaStudentService.talabat_mohaina_student().subscribe((data)=>{
      this.talabatOfstudent = data

    })







  }

  allRelations:any
  status_friends()
  {
    this._AllRelationFriendsService.get_all_relations().subscribe((data)=>{
      this.allRelations=data

    })

  }


  ahmed()
  {
    console.log('ahmed')

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


imageClick(index: number) {
  this.activeIndex = index;
  this.displayCustom = true;
}


flat2:any=[
  "assets/image/flat1/download.jpg"
  ,"assets/image/flat1/images.jpg",
  ""
]



  // google maps zoom level
  zoom: number = 15;
  // public markerOptions = {
  //   origin: {
  //       icon: '',
  //   },
  //   destination: {
  //       icon: '',
  //   }
  // }
  // initial center position for the map
  lat: number = 29.98266802027146;
  lng: number = 31.282595431970112;
  origin = {
    lat: 29.98266802027146,
    lng: 31.282595431970112 }
  destination :any
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)

  }

  renderOptions = {
    suppressMarkers: true,
  }
  public travelMode:any = 'WALKING';

  info($event:any) {
    this.destination= {lat: $event.latitude, lng: $event.longitude}
    console.log($event)
  }

  // mapClicked($event: any) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     label:"aaa",
  //     draggable: false
  //   });
  // }

  markerDragEnd(m: marker, $event: any) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
		  lat: 29.98266802027146,
		  lng: 31.282595431970112,
		  label: 'M-A',
		  draggable: false
	  },
	  {
		  lat: 29.987512022499324,
		  lng: 31.28147741699778,
		  label: 'AA',
		  draggable: false
	  },
	  {

		  lat: 29.979289857048276,
		  lng: 31.27907876149529,
		  label: 'BB',
		  draggable: false
	  },
	  {
		  lat: 29.986009096866912,
		  lng: 31.28852027783488,
		  label: 'CC',
		  draggable: false
	  }
  ]

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label: string;
	draggable: boolean;
}


