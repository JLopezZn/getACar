import { Component, Inject, OnInit } from '@angular/core';
import { Icar } from 'src/app/models/Icar';
import { CarService } from 'src/app/services/car.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  cars:Icar[];
  constructor(private carService: CarService,private modalService:MatDialog,@Inject(MAT_DIALOG_DATA) public data:any, private router:  Router) { }

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

  sendMessage(){
    if(!localStorage.getItem('AuthToken')){
      confirm("Por favor inicia sesíon.");
      this.modalService.closeAll();
      this.router.navigate(['/login']);
      return;
    }
    setTimeout(() => {
      confirm("Mensaje enviado correctamente.");
      window.location.reload();
    }, 1000);
  }
}
