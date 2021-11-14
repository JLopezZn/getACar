import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authS: AuthService, private router: Router) {
   }

  ngOnInit(): void {
  }

  handleClick(){
      if(this.authS.isUserLogged()){
        this.authS.logout();
        return;
      }
      this.router.navigate(['/login']);
  }

  viewProfile(){
    this.router.navigate(['/userProfile'])
  }

}
