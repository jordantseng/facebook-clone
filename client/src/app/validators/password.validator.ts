import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ProfileService } from '../feature-modules/profile/profile.service';

@Injectable({ providedIn: 'root' })
export class ValidPassword implements AsyncValidator {
  constructor(private profileService: ProfileService) {}

  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    return this.profileService.validateMyPassword(control.value);
  };
}
