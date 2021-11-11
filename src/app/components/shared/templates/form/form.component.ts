import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControls, FormData } from '../../../../models/IFormData';
import { AuthService } from '../../../../services/auth/auth.service';
import { REGEXP } from '../../../../../assets/regex/regex';
import { AuthResponse } from 'src/app/models/IAuthResponse';
import { Router } from '@angular/router';
import { AlertsService } from '../../../../services/alerts/alerts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnChanges {
  @Input() data!: FormData;
  @Input() key!: string;
  form: FormGroup = this.fb.group({});
  formHasErrors = false;

  constructor(
    private fb: FormBuilder,
    private authS: AuthService,
    private router: Router,
    private alertS: AlertsService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.data.firstChange) {
      this.createForm(this.data.controls);
    }
  }

  createForm(controls: FormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            if (value == 'email')
              validatorsToAdd.push(Validators.pattern(REGEXP.EMAIL));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.form.addControl(control.name, this.fb.control('', validatorsToAdd));
    }
  }

  inputHasError(control: string) {
    if (
      this.form.controls[control].errors &&
      this.form.controls[control].touched
    )
      return true;
    else return false;
  }

  changeGenre(e: any){
    this.form.controls['genre'].setValue(e.target.value, {
      onlySelf: true
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.value);
      this.formHasErrors = true;
      return;
    }

    this.authS
      .connect(this.form.value, this.key)
      .subscribe((resp: AuthResponse) => {
        if (resp.details) {
          confirm(resp.details);
          // this.alertS.showAlert(resp.details, 'error');
          return;
        }
        // this.alertS.showSuccessLoginAlert(`Bienvenido nuevamente ${resp.users.nombres}`)
        localStorage.setItem('AuthToken', resp.token);
        this.router.navigate(['/home']);
        confirm(`Bienvenido ${resp.users.nombres}!`);
      });
  }
}
