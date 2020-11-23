import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';

import { PostsModule } from '../posts/posts.module';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [
    ProfileHomeComponent,
    EditProfileComponent,
    EditPasswordComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PostsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularMaterialModule,
  ],
  entryComponents: [EditProfileComponent, EditPasswordComponent],
})
export class ProfileModule {}
