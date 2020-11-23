import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loading: boolean;
  errorMessage: string;
  errorSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.errorSub = this.authService.error$.subscribe((errorMessage) => {
      this.loading = false;
      this.errorMessage = errorMessage;
    });
  }

  login(formValues) {
    this.loading = true;
    this.authService.login(formValues);
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
