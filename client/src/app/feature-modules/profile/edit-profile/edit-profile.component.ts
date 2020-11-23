import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProfileComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data.name, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  onEditFormClick() {
    if (this.form.invalid) {
      return;
    }

    this.dialogRef.close(this.form.value);
  }
}
