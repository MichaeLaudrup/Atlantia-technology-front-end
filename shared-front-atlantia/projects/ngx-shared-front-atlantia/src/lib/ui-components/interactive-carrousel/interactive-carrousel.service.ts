import { BehaviorSubject } from 'rxjs';

export class CarrouselService {

  private _currentSlideIndex = new BehaviorSubject<number>(0);

  get currentSlideIndex$() {
    return this._currentSlideIndex.asObservable();
  }

  setSlideIndex(index: number) {
    this._currentSlideIndex.next(index);
  }

}