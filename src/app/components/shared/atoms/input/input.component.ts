import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: '',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type!: string;
  @Input() formControlName!: string;
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
