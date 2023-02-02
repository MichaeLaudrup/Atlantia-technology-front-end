import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-atlant-dinamic-nav-bar',
  templateUrl: './dinamic-nav-bar.component.html',
  styleUrls: ['./dinamic-nav-bar.component.scss']
})
export class DinamicNavBarComponent {
  @Input() navContentExpanded = false;
  @Input() navItems = [
    {
      googleMaterialName: 'home',
      name: "Página de inicio",
      link: ""
    },{
      googleMaterialName: 'self_improvement',
      name:"Sobre el Autor", 
      link:""
    }]; 


  toggleExpanded() {
    this.navContentExpanded = !this.navContentExpanded;
    console.log(this.navContentExpanded); 
  }
}
