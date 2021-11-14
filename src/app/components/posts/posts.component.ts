import { Component, OnInit } from '@angular/core';
import { Icar } from 'src/app/models/Icar';
import { CarService } from 'src/app/services/car.service'; 
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  cars:Icar[];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.connect('cars/').subscribe(data=>{
      this.cars = data;
    },e=>{
      console.log("Error en suscripcion de Carros",e);
    })
  } 
  
}
