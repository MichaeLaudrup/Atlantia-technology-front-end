import { Component } from '@angular/core';
import { navBarLink } from 'ngx-shared-front-atlantia'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atlantia-front-end';
  navItems: navBarLink[] = [
    {
      googleMaterialName: 'home',
      name: "Página de inicio",
      link: ""
    },{
      googleMaterialName: 'self_improvement',
      name:"Sobre el Autor", 
      link:""
    }]; 

  
}
