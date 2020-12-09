import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './feature-modules/auth/login/login.component';
import { SignupComponent } from './feature-modules/auth/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./feature-modules/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'profile',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./feature-modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
