import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  color1:any
  color2:any
  color3:any
  color4:any

@Input() education:string = 'block'
@Input() cleaning:string = 'block'
@Input() eating:string = 'none'

  constructor(private _AppComponent:AppComponent) {
    this.color1=_AppComponent.color1
    this.color2=_AppComponent.color2
    this.color3=_AppComponent.color3
    this.color4=_AppComponent.color4
   }

  ngOnInit(): void {
  }

}
