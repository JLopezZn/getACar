import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data/user-data.service';
import { Users } from '../../../models/IAuthResponse';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { REGEXP } from '../../../../assets/regex/regex';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userInfo!: Users;
  form!: FormGroup;
  formHasErrors = false;

  constructor(private userDataS: UserDataService, private fb: FormBuilder) {
    this.userInfo = userDataS.getUserInfo();
    this.form = new FormGroup({
      name: new FormControl(`${this.userInfo.nombres}`, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl(`${this.userInfo.apellidos}`, [
        Validators.required,
        Validators.minLength(3),
      ]),
      phone: new FormControl(`${this.userInfo.telefono}`, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl(`${this.userInfo.email}`, [
        Validators.required,
        Validators.pattern(REGEXP.EMAIL),
      ]),
    });
  }

  ngOnInit(): void {}


  onSubmit(){
    if (this.form.invalid) {
      console.log(this.form.value);
      this.formHasErrors = true;
      return;
    }
    console.log(this.form)
  }
}
