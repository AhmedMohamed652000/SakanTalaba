import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGurdGuard implements CanActivate {
  constructor(private _AuthService:AuthService , public _Router:Router)
  {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(this._AuthService.currentUser.getValue() != null && localStorage.getItem('Role') != null && localStorage.getItem('Role') === 'user' )
      // {
      //   return true
      // }
      // else
      // {
      //   this._Router.navigate(['/login'])
      //   return false

      // }
      return true


  }

}
