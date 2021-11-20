import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleClick(){
	this.router.navigate([
		`/home`
	]);
  }
}
