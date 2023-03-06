import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { VerticalMenuItem, WindowResizeService, WindowSize, linkStatus } from '../../common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { mobile } from '../../common/consts';

/**
 * Component who shows a vertical interactive Menu
 */
@Component({
  selector: 'ngx-atlant-vertical-interactive-menu',
  templateUrl: './vertical-interactive-menu.component.html',
  styleUrls: ['./vertical-interactive-menu.component.scss']
})
export class VerticalInteractiveMenuComponent implements OnInit, OnDestroy {
  LinkStatus = linkStatus; 
  @Input() menuItems : VerticalMenuItem[] = [];
  @Input() fatherRoute : string = "";
  @Output() menuClosed : EventEmitter<boolean> = new EventEmitter(); 

  isSomeLinkHovered: boolean = false; 
  isSomeLinkSelected: boolean = false;
  currentItemIndexSelected: number = -1; 
  isMobile: boolean = false; 
  imgs: any[] = []; 
  private subscriptions : Subscription[] = [];
  
  constructor( private router: Router, private windowResizeService: WindowResizeService) {}
  
  ngOnInit(): void {
    this.subscriptions.push(this.windowResizeService.onResizeWindow$().subscribe( ({ width, height }: WindowSize) => {
      this.isMobile = width < mobile; 
    })); 

    this.subscriptions.push(this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.currentItemIndexSelected !== -1) {
        if (event.url === this.fatherRoute) {
          this.backToMenu(); 
        }
      }
    }));
  }
 
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }

  itemHovered(item: VerticalMenuItem) {
    if (this.isSomeLinkSelected) return; 
    item.status = this.LinkStatus.HOVER;
    this.isSomeLinkHovered = true; 
  }

  backToMenu() {
    this.isSomeLinkSelected = false;
    this.menuItems[this.currentItemIndexSelected].status = this.LinkStatus.FREE;
    this.currentItemIndexSelected = -1; 
  }
  
}
