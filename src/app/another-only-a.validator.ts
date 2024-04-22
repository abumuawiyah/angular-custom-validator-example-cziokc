import { AbstractControl } from '@angular/forms';

export const anotherOnlyAllowA = (control: AbstractControl): { [key: string]: any } | null => {
  if (control.value !== 'A') {
    return { 'ANOTHER_NOT_A': 'This is not A!' };
  }
}