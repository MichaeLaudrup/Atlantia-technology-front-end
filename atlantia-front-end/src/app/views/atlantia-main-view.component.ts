import { Component } from '@angular/core';
import { navBarLink } from 'ngx-shared-front-atlantia';

@Component({
  selector: 'app-atlantia-main-view',
  templateUrl: './atlantia-main-view.component.html',
  styleUrls: ['./atlantia-main-view.component.scss']
})
export class AtlantiaMainViewComponent {
  navItems: navBarLink[] = [
    {
      googleMaterialName: 'home',
      name: "Inicio",
      link: ""
    },{
      googleMaterialName: 'engineering',
      name:"Sobre el Autor", 
      link:""
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
}
