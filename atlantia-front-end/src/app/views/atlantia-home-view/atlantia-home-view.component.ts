import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlantia-home-view',
  templateUrl: './atlantia-home-view.component.html',
  styleUrls: ['./atlantia-home-view.component.scss']
})
export class AtlantiaHomeViewComponent{
  logoBright: boolean = false;
  menuOpened: boolean = false; 
  
  constructor() {
    this.preloadImages(); 
  }

  preloadImages() {
    const firstImage = new Image(); 
    firstImage.src = '/assets/atlantia-logo-white.png';
    
    const secondImage = new Image(); 
    secondImage.src = '/assets/atlantia-logo-white-ligth.png'; 
  }

}
