import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';
import { User } from 'src/app/interfaces/auth.model';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly url = '/api/user';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  updateMyProfile(formValues) {
    this.http.put<User>(`${this.url}/me`, formValues).subscribe((user) => {
      this.authService.user$.next(user);

      this.reloadPage();
    });
  }

  validateMyPassword(password) {
    return this.http
      .post<{ [key: string]: string }>(`${this.url}/me/password`, {
        currentPassword: password,
      })
      .pipe(
        map((res) => null),
        catchError((err) => of({ invalidPassword: true }))
      );
  }

  updateMyPassword(formValues) {
    this.http
      .patch<{ message: string }>(`${this.url}/me/password`, formValues)
      .subscribe(() => {
        this.reloadPage();
      });
  }

  updateMyAvatar(avatar: File) {
    const fd = new FormData();
    fd.append('avatar', avatar);

    this.http
      .put<string>(`${this.url}/me/avatar`, fd)
      .subscribe((avatarPath) => {
        this.authService.user$.next({
          ...this.authService.user$.getValue(),
          avatar: avatarPath,
        });

        this.reloadPage();
      });
  }

  private reloadPage() {
    this.router.navigate(['profile'], {
      queryParams: {
        ts: Date.now().toString(),
      },
      queryParamsHandling: 'merge',
      skipLocationChange: true,
    });
  }
}
