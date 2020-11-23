import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthFormValues } from 'src/app/interfaces/auth.model';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
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

  signup(formValues: AuthFormValues) {
    this.loading = true;

    this.authService.signup(formValues);
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
