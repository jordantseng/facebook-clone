import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { confirmPasswordValidator } from '../../../validators/confrim-password.validator';
import { ValidPassword } from '../../../validators/password.validator';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css'],
})
export class EditPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditPasswordComponent>,
    private validPassword: ValidPassword,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        currentPassword: ['', Validators.required, this.validPassword.validate],
        newPassword: ['', Validators.required],
        confirmedNewPassword: ['', Validators.required],
      },
      {
        validators: [confirmPasswordValidator],
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

  onEditFormClick() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.dialogRef.close(this.form.value);
  }
}
