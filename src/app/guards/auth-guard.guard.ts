import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
 constructor(private router: Router, private authS: AuthService) {
 }

  canActivate(): boolean {
    if(this.authS.isUserLogged()){
      return true;
    } else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
