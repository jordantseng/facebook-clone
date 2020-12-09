import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Subject } from 'rxjs';

import { AuthFormValues, User } from 'src/app/interfaces/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = '/api/user';
  private tokenTimer: any;
  isLoggedIn$ = new BehaviorSubject<boolean>(null);
  user$ = new BehaviorSubject<User>(null);
  error$ = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  login(credentials: AuthFormValues) {
    this.http.post<User>(`${this.url}/login`, credentials).subscribe(
      (user) => {
        this.isLoggedIn$.next(true);
        this.user$.next(user);
        this.error$.next('');

        this.setTokenTimerAndSaveAuthToStorage(
          user.userToken.expiresIn,
          user.userToken.token
        );

        this.router.navigate(['../'], {
          relativeTo: this.route,
        });
      },
      (error) => {
        this.error$.next(error.error.message);
      }
    );
  }

  signup(credentials: AuthFormValues) {
    this.http.post<User>(this.url, credentials).subscribe(
      (user) => {
        this.isLoggedIn$.next(true);
        this.user$.next(user);

        this.setTokenTimerAndSaveAuthToStorage(
          user.userToken.expiresIn,
          user.userToken.token
        );

        this.router.navigate(['../'], {
          relativeTo: this.route,
        });
      },
      (error) => {
        this.error$.next(error.error.message);
      }
    );
  }

  getMyProfile() {
    this.http.get<User>(`${this.url}/me`).subscribe((user) => {
      this.user$.next(user);
    });
  }

  signout() {
    localStorage.removeItem('userToken');

    this.isLoggedIn$.next(false);

    this.router.navigate(['/login']);

    clearTimeout(this.tokenTimer);
  }

  checkAuth() {
    const userToken = JSON.parse(localStorage.getItem('userToken'));

    if (!userToken) {
      return;
    }

    const now = new Date();
    const expiresInMs =
      new Date(userToken.expirationDate).getTime() - now.getTime();

    if (expiresInMs > 0) {
      this.isLoggedIn$.next(true);
      this.setTokenTimer(expiresInMs);
      this.getMyProfile();
    } else {
      this.signout();
    }
  }

  setTokenTimerAndSaveAuthToStorage(expiresIn: number, token: string) {
    const expiresInMs = +expiresIn * 1000;
    this.setTokenTimer(expiresInMs);
    this.saveAuthToStorage(token, expiresInMs);
  }

  private saveAuthToStorage(token: string, expiresIn: number) {
    const now = new Date();
    const expiration = new Date(now.getTime() + expiresIn);

    const expirationDate = expiration.toISOString();

    localStorage.setItem(
      'userToken',
      JSON.stringify({ token, expirationDate })
    );
  }

  private setTokenTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.signout();
    }, duration);
  }
}
