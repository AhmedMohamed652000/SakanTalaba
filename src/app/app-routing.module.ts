import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { AtmHouseComponent } from './student/atm-studen-main/atm-house/atm-house.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { AuthGurdGuard } from './auth-gurd.guard';
import { AtmHousingOnwerComponent } from './onwer-housing/atm-onwer-main/atm-housing-onwer/atm-housing-onwer.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'student',canActivate:[AuthGurdGuard],component:AtmHouseComponent},
  {path:'owner',canActivate:[AuthGurdGuard],component:AtmHousingOnwerComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
