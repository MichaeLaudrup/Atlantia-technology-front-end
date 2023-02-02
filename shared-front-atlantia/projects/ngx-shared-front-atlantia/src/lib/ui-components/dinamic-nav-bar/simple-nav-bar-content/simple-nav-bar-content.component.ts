import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-atlant-simple-nav-bar-content',
  templateUrl: './simple-nav-bar-content.component.html',
  styleUrls: ['./simple-nav-bar-content.component.scss']
})
export class SimpleNavBarContentComponent {
  @Input() navegationItems = [
    {
      name: 'x',
      link: 'y'
    }
  ]
}
