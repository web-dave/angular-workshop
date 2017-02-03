import { FormControl, ValidatorFn } from '@angular/forms';

export const isbnValidator: ValidatorFn = function isbnValidator(c: FormControl) {
  const isbnRegExp = /^97(?:8|9)([ -])\d{1,5}\1\d{1,7}\1\d{1,6}\1\d$/;
  const isValid = isbnRegExp.test(c.value);
  if (isValid) {
    return null;
  } else {
    return { isbn: { valid: false } };
  }
};
