import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData } from '../../../models/IFormData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formData!: FormData;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('../assets/formsConfiguration/register.json').subscribe((resp: any) => this.formData = resp);
  }
}
