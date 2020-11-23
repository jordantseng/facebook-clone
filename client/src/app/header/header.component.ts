import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';
import { User } from 'src/app/interfaces/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  loggedInUser: User;
  private authSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSub = this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onSignout() {
    this.authService.signout();
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
