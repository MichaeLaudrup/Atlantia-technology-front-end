import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { VerticalMenuItem, WindowResizeService, WindowSize, callToActionType, fadeAnimation} from '../../common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { mobile } from '../../common/consts';

/**
 * Component who shows a vertical interactive Menu
 */
@Component({
  selector: 'ngx-atlant-vertical-interactive-menu',
  templateUrl: './vertical-interactive-menu.component.html',
  styleUrls: ['./vertical-interactive-menu.component.scss'],
  animations: [fadeAnimation]
})
export class VerticalInteractiveMenuComponent implements OnInit {
  @HostBinding('style.--number-inputs') numInputsScss = -1;
  @Input() menuItems : VerticalMenuItem[] = [];
  @Input() fatherRoute : string = "";
  @Input() menuIsVisible: boolean = true; 
  @Output() menuClosed : EventEmitter<boolean> = new EventEmitter();

  @Input() currentItemIndexSelected: number = -1; 

  ctaTypes = callToActionType;  
  
  constructor( private router: Router) {}
  
  ngOnInit(): void {
    this.numInputsScss = this.menuItems.length;
    if(this.router.url === this.fatherRoute) return; 
    this.menuIsVisible = true; 
    const firstChildRoute = this.router.url.slice(1).split('/')[1];
    this.currentItemIndexSelected = this.menuItems.findIndex( ({routerLink}) => {
      return routerLink.indexOf(firstChildRoute) !== -1; 
    });

  }


  goBack() : void {
    this.currentItemIndexSelected = -1; 
    this.router.navigate([this.fatherRoute]);
  }
}
