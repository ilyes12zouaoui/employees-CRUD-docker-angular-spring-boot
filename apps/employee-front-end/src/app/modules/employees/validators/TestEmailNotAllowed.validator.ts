import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

export const testEmailNotAllowedAsync: AsyncValidatorFn = (
  control: AbstractControl
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (control.value === 'test@test') {
        resolve({ testEmailNotAllowedAsync: true });
      }
      resolve(null);
    }, 3000);
  });
};
