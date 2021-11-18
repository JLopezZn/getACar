import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icar } from '../models/Icar';
import { Users } from '../models/IAuthResponse';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCars(key: string): Observable<Icar[]> {
    return this.http.get<Icar[]>(this.url + key);
  }

  getCarById(id: number): Observable<Icar> {
    return this.http.get<Icar>(this.url + 'cars/' + id.toString() + '/');
  }

  getMyCars() {
    let token = localStorage.getItem('AuthToken');
    return this.http.get<Icar[]>(`${this.url}cars/user/`, {
      headers: { Authorization: `Token ${token}` }
    });
  }

  deleteCar(id: number) {
    let token = localStorage.getItem('AuthToken');
    return this.http.delete(`${this.url}cars/${id}`, {
      headers: { Authorization: `Token ${token}` }
    });
  }

  postCar(data: any, user: Users) {
    let token = localStorage.getItem('AuthToken');
    const { brand, image, model, price, transmission, type_car, year } = data;
    let body = {
      brand,
      image,
      model,
      price,
      transmission,
      type_car,
      year
    };
    return this.http.post(`${this.url}cars/`, body, {headers: { Authorization: `Token ${token}` }});
  }
}
