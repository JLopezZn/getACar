import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginUser } from '../../models/ILoginUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl;

  constructor(private http : HttpClient) { }

  connect(data: any, key: string){
    const body = {
      "nombres": data.name,
      "apellidos": data.lastname,
      "genero": data.genre,
      "telefono": data.telephone,
      "email": data.email,
      "password": data.password
  }
   return this.http.post(`${this.url}${key}/`, body);
  }
}
