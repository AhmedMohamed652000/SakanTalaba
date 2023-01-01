import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SwitchUsersGuard implements CanActivate {
  constructor(private _Router: Router,private _AuthService:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree |any {
      // if(this._AuthService.currentUser.getValue() != null && localStorage.getItem('Role') != null && localStorage.getItem('Role') === 'owner' )
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
