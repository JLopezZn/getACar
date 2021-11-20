import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData } from '../../../models/IFormData';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.scss']
})
export class EditPostsComponent implements OnInit {
  formData!: FormData;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../assets/formsConfiguration/cars.json').subscribe((resp: any) => this.formData = resp);
  }

}
