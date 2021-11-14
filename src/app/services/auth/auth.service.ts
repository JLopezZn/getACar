import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../../models/IAuthResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl;

  constructor(private http : HttpClient, private router: Router) { }

  connect(data: any, key: string){
    const body = {
      "nombres": data.name,
      "apellidos": data.lastname,
      "genero": data.genre,
      "telefono": data.telephone,
      "email": data.email,
      "password": data.password
  }
   return this.http.post<AuthResponse>(`${this.url}${key}/`, body);
  }

  isUserLogged(){
    return localStorage.getItem('AuthToken');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
