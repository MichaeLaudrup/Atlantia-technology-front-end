import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { navBarLink } from '../../data-models';

@Component({
  selector: 'ngx-atlant-dinamic-nav-bar',
  templateUrl: './dinamic-nav-bar.component.html',
  styleUrls: ['./dinamic-nav-bar.component.scss']
})
export class DinamicNavBarComponent implements OnInit {
  @Input() navContentExpanded = false;
  @Input() navItems: navBarLink[] = []; 
  @Input() srcPathLogo: string = "assets/atlantia-logo.png";
  @Input() linkOnClickLogo: string = "/home";
   
  ngOnInit(): void {
    this.navContentExpanded = false; 
    const navItemsLength = this.navItems.length;
    const logoPosition = Math.ceil(navItemsLength / 2);
    
    this.navItems.splice(logoPosition, 0, {
      name: "",
      link: "",
      isLogo: true
    }); 
    if ((navItemsLength % 2) > 0) {
      this.navItems.push({
        name: "",
        link: "",
        isEmpty: true,
      })
    };  

  }

  toggleExpanded() {
    this.navContentExpanded = !this.navContentExpanded;
  }
}
