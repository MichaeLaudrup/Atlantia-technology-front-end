import { Component, EventEmitter, Input, Output } from '@angular/core';
import { navBarLink } from '../../../data-models';


@Component({
  selector: 'ngx-atlant-simple-nav-bar-content',
  templateUrl: './simple-nav-bar-content.component.html',
  styleUrls: ['./simple-nav-bar-content.component.scss']
})
export class SimpleNavBarContentComponent {
  @Input() navegationItems: navBarLink[] = [];
  @Input() numberHover: number = -1; 

  @Output() numberHoverChanged = new EventEmitter<number>();
  @Output() itemSelected = new EventEmitter<number>(); 
}
