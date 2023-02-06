import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBarLink } from 'ngx-shared-front-atlantia';

@Component({
  selector: 'app-atlantia-main-view',
  templateUrl: './atlantia-main-view.component.html',
  styleUrls: ['./atlantia-main-view.component.scss']
})
export class AtlantiaMainViewComponent {
  currentRoute = -1; 
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
      name:"Alejandría", 
      link:""
    },
    {
      googleMaterialName: 'light_mode',
      name:"Apolo", 
      link:""
    },
  
  ]; 

  processOutlet(event: any, outlet: RouterOutlet) {
    this.currentRoute = outlet && outlet.activatedRouteData && outlet.activatedRouteData['order']; 
  }
}
