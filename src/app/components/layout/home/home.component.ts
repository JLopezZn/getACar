import { Component, OnInit } from '@angular/core';
import { AuthGuardGuard } from 'src/app/guards/auth-guard.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authGuard:AuthGuardGuard) {
  }

  ngOnInit(): void {
    
  }

}
