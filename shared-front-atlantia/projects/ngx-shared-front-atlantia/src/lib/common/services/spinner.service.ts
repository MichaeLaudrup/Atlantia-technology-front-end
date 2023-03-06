import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  private showSpinner = new BehaviorSubject<boolean>(false);
  showSpinner$ = this.showSpinner.asObservable();

  activateSpinner() {
    this.showSpinner.next(true);
  }

  deactivateSpinner() {
    this.showSpinner.next(false);
  }
}