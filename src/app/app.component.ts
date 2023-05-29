import {
  EventReady,
  EventScanError,
  EventScanSuccess,
  SDKError
} from '@microblink/blinkid-in-browser-sdk/ui/dist/types/utils/data-structures';

import '@microblink/blinkid-in-browser-sdk/ui/dist';

import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color1:any='#BEEAEC'
  color2:any='#00ADB5'
  color3:any='#84D0F7'
  color4:any='#393E46'


lan:any=localStorage.getItem('lang')


  constructor(translate: TranslateService) {
    translate.setDefaultLang(this.lan);
    if(localStorage.getItem('lang') == "ar"){
      this.lan='rtl'

    }
    else if (localStorage.getItem('lang') == "en") {

      this.lan='ltr'

    }




  }


}
