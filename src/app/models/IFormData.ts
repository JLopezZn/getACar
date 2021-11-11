export interface FormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

export interface FormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

export interface FormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options: FormControlOptions;
  required: boolean;
  validators: FormValidators;
  style: string;
  selections: [{
    value: string;
    label: string;
  }]
}

export interface FormButtons {
  type: string,
  label: string,
  style?: string,
  routerLink?: string
}

export interface FormData {
  controls: FormControls[];
  buttons: FormButtons[];
}
