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
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userInfo!: Users;
  form!: FormGroup;
  formHasErrors = false;
  editUser: boolean = false;

  constructor(private userDataS: UserDataService, private fb: FormBuilder, private router: Router) {
    this.userInfo = userDataS.getUserInfo();
    this.form = new FormGroup({
      nombres: new FormControl(`${this.userInfo.nombres}`, [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl(`${this.userInfo.apellidos}`, [
        Validators.required,
        Validators.minLength(3),
      ]),
      telefono: new FormControl(`${this.userInfo.telefono}`, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl(`${this.userInfo.email}`, [
        Validators.required,
        Validators.pattern(REGEXP.EMAIL),
      ]),
      genero: new FormControl(`${this.userInfo.genero}`, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  changeGenre(e: any) {
    this.form.controls['genero'].setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit() {
    if (this.form.invalid || this.form.get('genero') === undefined) {
      this.formHasErrors = true;
      return;
    }
    this.editUser = !this.editUser;
    this.userDataS.updateUserData(this.form.value).subscribe((resp:any) => {
      if(resp.details){
        confirm('Algo ha salido mal. Por favor intenta más tarde.');
        this.router.navigate(['/home']);
      }
      confirm('Información actualizada correctamente.');
      this.userDataS.setUserInfo(resp);
      this.router.navigate(['/home']);
    });
  }

  editProfile() {
    this.editUser = !this.editUser;
  }
}
