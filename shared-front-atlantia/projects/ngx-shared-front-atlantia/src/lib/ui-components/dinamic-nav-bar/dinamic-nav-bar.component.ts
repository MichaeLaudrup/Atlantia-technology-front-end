import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { navBarLink } from '../../data-models';

@Component({
  selector: 'ngx-atlant-dinamic-nav-bar',
  templateUrl: './dinamic-nav-bar.component.html',
  styleUrls: ['./dinamic-nav-bar.component.scss']
})
export class DinamicNavBarComponent {
  @Input() navContentExpanded = false;
  @Input() navItems: navBarLink[] = []; 
  @Input() srcPathLogo: string = "assets/atlantia-logo.png";
  @Input() linkOnClickLogo: string = "/home";
  currentHovered = -1;
  indexSelected = -1; 


  toggleExpanded() {
    this.navContentExpanded = !this.navContentExpanded;
  }

  updateItemHovered(currentHovered:number) {
    debugger;
    console.log(currentHovered)
    this.currentHovered = currentHovered; 
  }
}
