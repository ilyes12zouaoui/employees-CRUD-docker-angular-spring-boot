import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinnerStateUpdated$: Subject<boolean> = new Subject<boolean>();

  emitShowSpinner() {
    this.spinnerStateUpdated$.next(true);
  }

  emitHideSpinner() {
    this.spinnerStateUpdated$.next(false);
  }
}
