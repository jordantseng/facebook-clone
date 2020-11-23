import { AbstractControl } from '@angular/forms';
export const confirmPasswordValidator = (form: AbstractControl) => {
  const { newPassword, confirmedNewPassword } = form.value;

  if (
    form.get('newPassword').dirty &&
    form.get('confirmedNewPassword').dirty &&
    newPassword !== confirmedNewPassword
  ) {
    return { passwordNotMatch: true };
  }

  return null;
};
