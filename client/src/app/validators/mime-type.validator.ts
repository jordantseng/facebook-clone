import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';

export const mimeType = (
  control: AbstractControl
): Observable<ValidationErrors> => {
  if (!control.value || typeof control.value === 'string') {
    return of(null);
  }

  const file = control.value as File;

  const fileReader = new FileReader();

  const fileReader$ = new Observable((observer: Observer<ValidationErrors>) => {
    fileReader.addEventListener('loadend', (e) => {
      const arr = new Uint8Array(e.target.result as ArrayBuffer).subarray(0, 4);
      let header = '';
      let isValid = false;

      for (const i of arr) {
        header += i.toString(16);
      }

      switch (header) {
        case '89504e47':
          isValid = true;
          break;
        case 'ffd8ffe0':
        case 'ffd8ffe1':
        case 'ffd8ffe2':
        case 'ffd8ffe3':
        case 'ffd8ffe8':
          isValid = true;
          break;
        default:
          isValid = false; // Or you can use the blob.type as fallback
          break;
      }
      if (isValid) {
        observer.next(null);
      } else {
        observer.next({ invalidMimeType: true });
      }
      observer.complete();
    });
    fileReader.readAsArrayBuffer(file);
  });
  return fileReader$;
};
