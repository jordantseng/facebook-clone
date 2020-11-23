import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/angular-material.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
  ],
})
export class AuthModule {}
