import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControls, FormData } from '../../../../models/IFormData';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnChanges {
  @Input() data!: FormData;
  @Input() key!: string;
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private authS: AuthService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.data.firstChange){
      this.createForm(this.data.controls);
    }
  }

  createForm(controls: FormControls[]){
    for(const control of controls){

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
            validatorsToAdd.push(Validators.pattern(value));
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

  onSubmit(){
    // if(this.form.invalid) return;

    this.authS.connect(this.form.value, this.key).subscribe(resp =>{
      console.log(resp);
    })
  }
}
