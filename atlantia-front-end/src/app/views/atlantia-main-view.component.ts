import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerService, WindowResizeService, WindowSize } from 'ngx-shared-front-atlantia';
import { navBarLink } from 'ngx-shared-front-atlantia';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-atlantia-main-view',
  templateUrl: './atlantia-main-view.component.html',
  styleUrls: ['./atlantia-main-view.component.scss']
})
export class AtlantiaMainViewComponent implements OnDestroy, OnInit{

  currentRoute = -1;
  showSpinner = false; 
  navItems: navBarLink[] = [
    {
      googleMaterialName: 'home',
      name: "Inicio",
      link: "/home"
    },{
      googleMaterialName: 'engineering',
      name:"Sobre el Autor", 
      link:"/about-me"
    },
    {
      googleMaterialName: 'school',
      name:"Proyecto Alejandría", 
      link:"alejandria-project"
    },
    {
      googleMaterialName: 'light_mode',
      name:"Proyecto Apolo", 
      link:"hermes-project"
    }

  ]; 
  
  private subscriptions : Subscription[] = [];
  
  @HostBinding('style.width.px')
  public width!: number;

  @HostBinding('style.height.px')
  public height!: number;
  
  constructor(private spinnerService: SpinnerService, private windowResizeServ: WindowResizeService){}

  ngOnInit(): void {
    this.subscriptions.push(this.spinnerService.showSpinner$.subscribe( (showSpinner : boolean) => {
      this.showSpinner = showSpinner
    }));

    this.windowResizeServ.onResizeWindow$().subscribe(( { height, width} : WindowSize) => {
      this.width = window.innerWidth; 
      this.height = window.innerHeight;
    }); 
  }
  
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }



  processOutlet(event: any, outlet: RouterOutlet) {
    this.currentRoute = outlet && outlet.activatedRouteData && outlet.activatedRouteData['order']; 
  }
}
