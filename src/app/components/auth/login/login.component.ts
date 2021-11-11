import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData } from '../../../models/IFormData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  formData!: FormData;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('../assets/formsConfiguration/login.json').subscribe((resp: any) => this.formData = resp);
  }

}
