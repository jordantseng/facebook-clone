import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/interfaces/auth.model';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly url = '/api/user';

  constructor(private http: HttpClient) {}

  updateMyProfile(formValues) {
    return this.http.put<User>(`${this.url}/me`, formValues);
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
    return this.http.patch<{ message: string }>(
      `${this.url}/me/password`,
      formValues
    );
  }

  updateMyAvatar(avatar: File) {
    const fd = new FormData();
    fd.append('avatar', avatar);

    return this.http.put<string>(`${this.url}/me/avatar`, fd);
  }
}
