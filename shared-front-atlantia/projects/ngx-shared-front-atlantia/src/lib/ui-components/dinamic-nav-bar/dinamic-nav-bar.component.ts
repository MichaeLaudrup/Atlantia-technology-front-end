import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { navBarLink } from '../../common';

@Component({
  selector: 'ngx-atlant-dinamic-nav-bar',
  templateUrl: './dinamic-nav-bar.component.html',
  styleUrls: ['./dinamic-nav-bar.component.scss']
})
export class DinamicNavBarComponent {
  @Input() navContentExpanded = false;
  @Input() navItems: navBarLink[] = []; 
  @Input() srcPathLogo: string = "assets/atlantia-logo.png";
  @Input() mobileNavSrcPathLogo: ( string | undefined) = undefined; 
  @Input() linkOnClickLogo: string = "/home";
  currentHovered = -1;


  toggleExpanded() {
    this.navContentExpanded = !this.navContentExpanded;
  }

  updateItemHovered(currentHovered:number) {
    this.currentHovered = currentHovered; 
  }
}
