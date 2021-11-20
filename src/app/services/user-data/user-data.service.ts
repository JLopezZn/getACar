import { Injectable } from '@angular/core';
import { Users } from '../../models/IAuthResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userInfo!: Users;
  url = environment.apiUrl;
  token = localStorage.getItem('AuthToken')
  constructor(private http: HttpClient) {}

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
      if(data.genero)
        localStorage.setItem('userGenre', data.genero);
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
        telefono: localStorage.getItem('userPhone'),
        genero: localStorage.getItem('userGenre')
      }
    }
    return this.userInfo;
  }

  updateUserData(body: Users){
    return this.http.put(`${this.url}user`, body, {headers: { Authorization: `Token ${this.token}` }})
  }

  loadUserData(){
    return this.http.get<Users>(`${this.url}user`, {headers: { Authorization: `Token ${this.token}` }});
  }
}
