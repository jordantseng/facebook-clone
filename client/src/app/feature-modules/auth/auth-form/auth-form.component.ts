import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  @Input() formTitle: string;
  @Input() errorMessage: string;
  @Output() formSubmiited = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form =
      this.formTitle === 'Signup'
        ? this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
          })
        : this.fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
          });
  }

  onFormSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.formSubmiited.emit(this.form.value);
  }
}
