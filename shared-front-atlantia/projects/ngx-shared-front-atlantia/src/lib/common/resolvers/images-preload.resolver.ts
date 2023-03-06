import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, delay, forkJoin, map, of, tap } from 'rxjs';
import { SpinnerService } from '../services';

@Injectable()
export class ImagePreloadResolver implements Resolve<Observable<boolean>> {

  constructor(private spinnerService: SpinnerService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const { imgToPreloadUrls} = route.data; 
    this.spinnerService.activateSpinner(); 


    const observables : Array<Observable<boolean>> = imgToPreloadUrls.map((url: string) => {
      return new Observable<boolean>((observer) => {
        const img = new Image();
        img.onload = () => {
          observer.next();
          observer.complete();
        };
        img.onerror = () => {
          observer.error(`Failed to load image with URL: ${url}`);
        };
        img.src = url;
      });
    });
    return forkJoin(observables).pipe( map(() => true), tap( () => this.spinnerService.deactivateSpinner())) as Observable<boolean>;
  }
    //return of(true).pipe(delay(2000), tap(() => this.spinnerService.deactivateSpinner())); 
  //}

}