import { AbstractControl, ValidatorFn } from '@angular/forms';

export const testValueNotAllowed: ValidatorFn = (control: AbstractControl) => {
  if (control.value === 'test') {
    return { testValueNotAllowed: true };
  }

  return null;
};
