import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-owner',
  templateUrl: './services-owner.component.html',
  styleUrls: ['../../../student/atm-studen-main/atm-house/services/services.component.css','./services-owner.component.css']
})
export class ServicesOwnerComponent implements OnInit {


@Input() education:string = 'block'
@Input() cleaning:string = 'block'
@Input() eating:string = 'none'


  constructor() { }

  ngOnInit(): void {
  }

}
