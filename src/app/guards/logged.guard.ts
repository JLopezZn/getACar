import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor( private router: Router, private authS: AuthService){
  }

  canActivate(){
    if(this.authS.isUserLogged()){
      return false;
    }
    return true;
  }
}
