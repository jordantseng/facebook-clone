import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../angular-material.module';

import { PostFormComponent } from './post-form/post-form.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [PostFormComponent, SpinnerComponent, ErrorComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [PostFormComponent, ErrorComponent, SpinnerComponent],
})
export class SharedModule {}
