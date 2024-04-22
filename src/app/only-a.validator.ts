import { AbstractControl, ValidatorFn } from '@angular/forms';

export function onlyAllowA(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value !== 'A') {
      return { 'NOT_A': 'This is not A!' };
    }
  };
}