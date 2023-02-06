import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-atlant-dinamic-toggle-menu-icon',
  templateUrl: './dinamic-toggle-menu-icon.component.html',
  styleUrls: ['./dinamic-toggle-menu-icon.component.scss']
})
export class DinamicToggleMenuIconComponent implements OnInit {

  @Input() menuExpanded = false;
  @Input() defaultColor = 'green'; 
  @HostBinding('style.--color') color = 'red';

  ngOnInit(): void {
    this.color = this.defaultColor; 
  }
}
