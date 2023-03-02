import { Component, Input, OnInit } from '@angular/core';
import { VerticalMenuItem, linkStatus } from '../../common';

/**
 * Component who shows a vertical interactive Menu
 */
@Component({
  selector: 'ngx-atlant-vertical-interactive-menu',
  templateUrl: './vertical-interactive-menu.component.html',
  styleUrls: ['./vertical-interactive-menu.component.scss']
})
export class VerticalInteractiveMenuComponent implements OnInit {
  LinkStatus = linkStatus; 
  @Input() menuItems : VerticalMenuItem[] = [];
  isSomeLinkHovered: boolean = false; 
  isSomeLinkSelected: boolean = false;
  currentItemIndexSelected: number = -1; 
  isMobile: boolean = false; 
  imgs: any[] = []; 
  
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 576; 
    this.menuItems.forEach( item => {
      let img: any = new Image(); 
      img.src = item.imgUrl;
      this.imgs.push(img);  
    }); 
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
