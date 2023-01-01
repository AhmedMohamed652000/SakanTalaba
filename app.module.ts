import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import {CalendarModule} from 'primeng/calendar';
import {CaptchaModule} from 'primeng/captcha';
import {MultiSelectModule} from 'primeng/multiselect';


import {InputSwitchModule} from 'primeng/inputswitch';

import { RouterModule } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {GMapModule} from 'primeng/gmap';
import {FileUploadModule} from 'primeng/fileupload';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {DockModule} from 'primeng/dock';
import {BlockUIModule} from 'primeng/blockui';
import {DataViewModule} from 'primeng/dataview';
import {GalleriaModule} from 'primeng/galleria';

import {DialogModule} from 'primeng/dialog';
import {ListboxModule} from 'primeng/listbox';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ChipModule } from 'primeng/chip';

import { OwlModule } from 'ngx-owl-carousel';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';

import {ButtonModule} from 'primeng/button';
import {ScrollTopModule} from 'primeng/scrolltop';
import { AgmDirectionModule } from 'agm-direction';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AtmHouseComponent } from './student/atm-studen-main/atm-house/atm-house.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToastModule} from 'primeng/toast';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {
MatButtonModule
} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// Material Layout
import { MatCardModule } from '@angular/material/card';
// Material Form Controls
import { MatCheckboxModule } from '@angular/material/checkbox';
// Material Buttons & Indicators
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { AgmCoreModule } from '@agm/core';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {DividerModule} from 'primeng/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { NgModule  } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { NvbarComponent } from './nvbar/nvbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {CarouselModule} from 'primeng/carousel';
import { FriendComponent } from './student/atm-studen-main/atm-house/friend/friend.component';
import { ProfileComponent } from './student/atm-studen-main/atm-house/profile/profile.component';
import { MessageService } from 'primeng/api';
import { HousesComponent } from './student/atm-studen-main/atm-house/houses/houses.component';
import {RatingModule} from 'primeng/rating';
import { OptionsComponent } from './student/atm-studen-main/atm-house/options/options.component';
import { RequestComponent } from './student/atm-studen-main/atm-house/request/request.component';
import { AtmHousingOnwerComponent } from './onwer-housing/atm-onwer-main/atm-housing-onwer/atm-housing-onwer.component';
import { ProfileOnwerComponent } from './onwer-housing/atm-onwer-main/atm-housing-onwer/profile-onwer/profile-onwer.component';
import { AddHousingComponent } from './onwer-housing/atm-onwer-main/atm-housing-onwer/add-housing/add-housing.component';
import { ToEnglishNumPipe } from './my_pipes/to-english-num.pipe';
import { GenderPipe } from './my_pipes/gender.pipe';
import { ControlHousingComponent } from './onwer-housing/atm-onwer-main/control-housing/control-housing.component';
import { ValuePipe } from './value.pipe';
import {MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IfnullPipe } from './ifnull.pipe';
import { DatePipe } from './my_pipes/date.pipe';
import { LengthPipe } from './my_pipes/length.pipe';
import { ServicesComponent } from './student/atm-studen-main/atm-house/services/services.component';
import { ServicesOwnerComponent } from './onwer-housing/atm-onwer-main/services-owner/services-owner.component';
import { NullToZeroPipe } from './null-to-zero.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');}
@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    HomeComponent,
    RegisterComponent,
    AtmHouseComponent,
    LoginComponent,
    FriendComponent,
    ProfileComponent,
    HousesComponent,
    OptionsComponent,
    RequestComponent,
    AtmHousingOnwerComponent,
    ProfileOnwerComponent,
    AddHousingComponent,
    ToEnglishNumPipe,
    GenderPipe,
    ControlHousingComponent,
    ValuePipe,
    IfnullPipe,
    DatePipe,
    LengthPipe,
    ServicesComponent,
    ServicesOwnerComponent,
    NullToZeroPipe,

  ],
  imports: [
    CalendarModule,
    BrowserModule,
    NgxQRCodeModule,
    MultiSelectModule,
    DividerModule,
    RatingModule,
    CaptchaModule,
    AgmDirectionModule,
    DataViewModule,
    FileUploadModule,
    CarouselModule,
    BrowserAnimationsModule,
    GMapModule,
    AgmCoreModule.forRoot({
       apiKey: ''
    }),
     RouterModule.forRoot([]),
    AvatarGroupModule,
    AvatarModule,
    BlockUIModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage:'ar'
  }),
    DropdownModule,
    InputSwitchModule,
    GalleriaModule,
    ToastModule,
    FormsModule,
    ChipModule,
    ListboxModule,
    ScrollTopModule,
    ButtonModule,
    OwlModule,
    DialogModule,
    AccordionModule,
    AppRoutingModule,
    TabViewModule,
    DockModule,
    NgwWowModule,HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ScrollPanelModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    TranslateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  ,
  providers: [MessageService],
  bootstrap: [AppComponent]})
export class AppModule { }
