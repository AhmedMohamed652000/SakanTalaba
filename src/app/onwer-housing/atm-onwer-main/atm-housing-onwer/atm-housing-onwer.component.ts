import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-atm-housing-onwer',
  templateUrl: './atm-housing-onwer.component.html',
  styleUrls: ['../../../student/atm-studen-main/atm-house/atm-house.component.css','./atm-housing-onwer.component.css']
})
export class AtmHousingOnwerComponent implements OnInit {

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




  request_fnd_1 =false;
  search_fnd_1 =true;
  houses_requests='none';

search_requests_color='#393E46'


house_data ='block';
search_house_color='#00ADB5'
icon_house_color="#00ADB5"
url_house='../../assets/image/house.png';
active_house=false;
icon_house_color_item='#00ADB5'
my_house_color='#393E46'
my_house='none'
search_map_color='#393E46'
houses_map='none'

my_house_fun()
{
  this.houses_requests='none';
  this.search_requests_color='#393E46'
  this.search_house_color ='#393E46';
  this.house_data ='none';
  this.search_map_color ='#393E46';
  this.houses_map='none';
  this.my_house_color='#00ADB5'
  this.my_house='block'

}
search_map_fun()
{
  this.houses_requests='none';
  this.search_requests_color='#393E46'
  this.search_house_color ='#393E46';
  this.search_map_color ='#00ADB5';
  this.house_data ='none';
  this.houses_map='block'
  this.my_house_color='#393E46'
  this.my_house='none'

}




  request_show='none'
  search_fnd_color ='#00ADB5';
  add_house ='block';
  request_fnd_color ='#393E46';
  search_fnd()
  {
    this.my_house ='none';
    this.search_fnd_color ='#00ADB5';
    this.request_fnd_color ='#393E46';
    this.add_house ='block';
  }
  request_fnd()
  {
    this.request_fnd_color ='#00ADB5';
    this.search_fnd_color ='#393E46';
    this.my_house ='block';
    this.add_house ='none';


  }

  // ........................................

// ...................profile.....................
  profile_data =true;
  profile_data_color ='#00ADB5';

  call_data_color = '#393E46';
  call_data = false;

  interests =false
  interests_color='#393E46'

  profile_data_fun()
  {
    this.profile_data =true;
    this.profile_data_color ='#00ADB5';
    this.call_data_color = '#393E46';
    this.call_data = false;
    this.interests =false
    this.interests_color='#393E46'
  }
  call_data_fun()
  {
    this.profile_data =false;
    this.profile_data_color ='#393E46';
    this.call_data_color = '#00ADB5';
    this.call_data = true;
    this.interests =false
    this.interests_color='#393E46'
  }
  interests_fun()
  {
    this.profile_data =false;
    this.profile_data_color ='#393E46';
    this.call_data_color = '#393E46';
    this.call_data = false;
    this.interests =true
    this.interests_color='#00ADB5'
  }

  // ........................................

//.........houses.............................



requests=false
new_ads=true
my_ads=false
_requessts_color='#393E46'


search_house()
{
  this.search_house_color ='#00ADB5';
  this.new_ads =true;
  this.requests=false;
  this.my_ads=false;
  this._requessts_color='#393E46'
  this.search_requests_color='#393E46'


}


search_requests_fun()
{
  this.search_requests_color='#00ADB5'
  this.search_house_color ='#393E46';
  this._requessts_color='#393E46'
  this.new_ads =false;
  this.requests=false;
  this.my_ads=true;
}


_requests_fun()
{
  this.search_requests_color='#393E46'
  this.search_house_color ='#393E46';
  this._requessts_color='#00ADB5'
  this.new_ads =false;
  this.requests=true;
  this.my_ads=false;
}








eating='none'
cleaning='none'
education='flex'
cleaning_color='#393E46'
eating_color='#393E46'
education_color='#00ADB5'
cleaning_fun()
{
  this.eating_color='#393E46'
  this.education_color='#393E46'
  this.cleaning_color='#00ADB5'
  this.eating='none'
  this.education='none'
  this.cleaning='flex'
}
eating_fun()
{
  this.eating_color='#00ADB5'
  this.education_color='#393E46'
  this.cleaning_color='#393E46'
  this.eating='flex'
  this.education='none'
  this.cleaning='none'

}

education_fun()
{
  this.eating_color='#393E46'
  this.education_color='#00ADB5'
  this.cleaning_color='#393E46'
  this.eating='none'
  this.education='flex'
  this.cleaning='none'

}





  //.............................................


  icon_profile_color_item='#00ADB5'
  icon_profile_color="#FFFFFF"
  url_profile='../../assets/image/profile_color.png';
  active_profile=true;

  icon_partner_color="#00ADB5"
  url_partner='../../assets/image/manage.png';
  active_partner=false;
  icon_partner_color_item='#00ADB5'


  icon_otherServies_color="#00ADB5"
  url_otherServies='../../assets/image/more.png';
  active_otherServies=false;
  icon_otherServies_color_item='#00ADB5'


  icon_option_color="#00ADB5"
  url_option='../../assets/image/sittings.png';
  active_option=false;
  icon_option_color_item='#00ADB5'



  activeHouce()
  {
    this.icon_house_color="#FFFFFF"
    this.url_house='../../assets/image/ad_1.png';
    this.active_house=true;

    this.icon_profile_color="#00ADB5"

    this.url_profile='../../assets/image/profile.png';
    this.active_profile=false;

    this.icon_partner_color="#00ADB5"
    this.url_partner='../../assets/image/manage.png';
    this.active_partner=false;

    this.icon_otherServies_color="#00ADB5"
    this.url_otherServies='../../assets/image/more.png';
    this.active_otherServies=false;

    this.icon_option_color="#00ADB5"
    this.url_option='../../assets/image/sittings.png';
    this.active_option=false;

  }
  activeProfile()
  {

    this.icon_house_color="#00ADB5"
    this.url_house='../../assets/image/ad.png';
    this.active_house=false;

    this.url_profile='../../assets/image/profile_color.png';
    this.active_profile=true;
    this.icon_profile_color="#FFFFFF"

    this.icon_profile_color_item='#00ADB5'


    this.icon_partner_color="#00ADB5"
    this.url_partner='../../assets/image/manage.png';
    this.active_partner=false;

    this.icon_otherServies_color="#00ADB5"
    this.url_otherServies='../../assets/image/more.png';
    this.active_otherServies=false;

    this.icon_option_color="#00ADB5"
    this.url_option='../../assets/image/sittings.png';
    this.active_option=false;
  }

  activePartener()
  { this.icon_house_color="#00ADB5"
  this.url_house='../../assets/image/ad.png';
  this.active_house=false;

  this.icon_profile_color="#00ADB5"
  this.url_profile='../../assets/image/profile.png';
  this.active_profile=false;

  this.icon_partner_color="#FFFFFF"
  this.url_partner='../../assets/image/manage-1.png';
  this.active_partner=true;


  this.icon_otherServies_color="#00ADB5"
  this.url_otherServies='../../assets/image/more.png';
  this.active_otherServies=false;

  this.icon_option_color="#00ADB5"
  this.url_option='../../assets/image/sittings.png';
  this.active_option=false;

  }

  activeOther()
  {
    this.icon_house_color="#00ADB5"
    this.url_house='../../assets/image/ad.png';
    this.active_house=false;

    this.icon_profile_color="#00ADB5"
    this.url_profile='../../assets/image/profile.png';
    this.active_profile=false;

    this.icon_partner_color="#00ADB5"
    this.url_partner='../../assets/image/manage.png';
    this.active_partner=false;

    this.icon_otherServies_color="#FFFFFF"
    this.url_otherServies='../../assets/image/more_color.png';
    this.active_otherServies=true;

    this.icon_option_color="#00ADB5"
    this.url_option='../../assets/image/sittings.png';
    this.active_option=false;

  }

  activeOption()
  {
    this.icon_house_color="#00ADB5"
    this.url_house='../../assets/image/ad.png';
    this.active_house=false;

    this.icon_profile_color="#00ADB5"
    this.url_profile='../../assets/image/profile.png';
    this.active_profile=false;

    this.icon_partner_color="#00ADB5"
    this.url_partner='../../assets/image/manage.png';
    this.active_partner=false;

    this.icon_otherServies_color="#00ADB5"
    this.url_otherServies='../../assets/image/more.png';
    this.active_otherServies=false;

    this.icon_option_color="#FFFFFF"
    this.url_option='../../assets/image/sittings_color.png';
    this.active_option=true;

  }
//................. options...................

option_main_color="#00ADB5"
option_more_color='#393E46'
option_subscribe_color='#393E46'

main=true
subscribers=false
more=false

option_main()
{
  this.option_main_color='#00ADB5'
  this.option_subscribe_color='#393E46'
  this.option_more_color='#393E46'
  this.more=false
  this.subscribers=false
  this.main=true

}
option_subscribe()
{
  this.option_main_color='#393E46'
  this.option_subscribe_color='#00ADB5'
  this.option_more_color='#393E46'
  this.more=false
  this.subscribers=true
  this.main=false
}
option_more()
{
  this.option_main_color='#393E46'
  this.option_subscribe_color='#393E46'
  this.option_more_color='#00ADB5'
  this.more=true
  this.subscribers=false
  this.main=false
}








//..............................................


  fun()
  {
    console.log('123')
  }




  constructor(private _AppComponent:AppComponent) {
    console.log('saaaaaa')

    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4
   }




  activeIndex1: number = 0;


  ngOnInit() {

  }



}
