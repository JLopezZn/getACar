import { Component, Inject, OnInit } from '@angular/core';
import { Icar } from 'src/app/models/Icar';
import { CarService } from 'src/app/services/car.service'; 
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  cars:Icar[];
  constructor(private carService: CarService,private modalService:MatDialog,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.carService.getAllCars('cars/').subscribe(data=>{
      this.cars = data;
    },e=>{
      console.log("Error en suscripcion de Carros",e);
    })
  } 
  
  public vendedorModal(content:any,id:number){
    let car:Icar;
    this.carService.getCarById(id).subscribe(data=>{
      car = data;
      let modal=this.modalService.open(content, {
        data:car
      });   
    },e=>{
      console.log("Error al consultar auto",e);
      return;
    });
    
  }
}
