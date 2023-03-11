import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WindowSize } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {
  private resizeObserver: ResizeObserver;

  constructor() {
    this.resizeObserver = new ResizeObserver((entries: any) => {
        const width = window.innerWidth; 
        const height = window.innerHeight; 
        this.onResizeSubj$.next({width, height});
    });
    this.resizeObserver.observe(document.body);
  }

  private onResizeSubj$ = new Subject<WindowSize>();
  public onResizeWindow$(): Observable<WindowSize> {
    return this.onResizeSubj$.asObservable();
  } 
}


