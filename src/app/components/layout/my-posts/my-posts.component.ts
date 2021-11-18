import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/IAuthResponse';
import { UserDataService } from '../../../services/user-data/user-data.service';
import { CarService } from '../../../services/car.service';
import { Icar } from '../../../models/Icar';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
  userInfo!: Users;
  myPosts!: Icar[];

  constructor(private userS: UserDataService, private cars: CarService) {
    this.userInfo = userS.getUserInfo();
    cars.getMyCars().subscribe((resp) =>{
      this.myPosts = resp;
    })
  }

  ngOnInit(): void {
  }

  onDelete(id: number){
    let r = confirm('¿Está seguro que desea eliminar el anuncio?');
    if(r){
      this.cars.deleteCar(id).subscribe( (resp: any) => {
        if(resp.detail){
          confirm(resp.detail);
          return;
        }
        window.location.reload();
      })

    }
  }

}
