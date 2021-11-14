import { Injectable } from '@angular/core';
import { Users } from '../../models/IAuthResponse';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userInfo!: Users;
  constructor() {}

  setUserInfo(data: Users) {
    if (
      data.nombres &&
      data.apellidos &&
      data.id &&
      data.email &&
      data.telefono
    ) {
      localStorage.setItem('userName', data.nombres);
      localStorage.setItem('userLastName', data.apellidos);
      localStorage.setItem('userId', String(data.id));
      localStorage.setItem('userEmail', data.email);
      localStorage.setItem('userPhone', data.telefono);
    }
    this.userInfo = data;
  }

  getUserInfo() {
    if(!this.userInfo){
      this.userInfo = {
        nombres: localStorage.getItem('userName'),
        apellidos: localStorage.getItem('userLastName'),
        id: localStorage.getItem('userId'),
        email: localStorage.getItem('userEmail'),
        telefono: localStorage.getItem('userPhone')
      }
    }
    return this.userInfo;
  }
}
