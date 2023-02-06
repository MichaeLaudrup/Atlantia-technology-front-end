import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-atlant-dinamic-web-pages',
  templateUrl: './dinamic-web-pages.component.html',
  styleUrls: ['./dinamic-web-pages.component.scss'],
  animations: [
    trigger('carrouselAnimation', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({
              position: 'absolute',
              left: '-100%',
              top: 0, 
              bottom: 0 ,
              width: '100%',
              transform: 'scale(.3)',
              opacity: .5
            }),
            animate('1.2s ease-in-out', style({
              left: '0%',
              transform: 'scale(1)',
              opacity: 1
            }))
          ], {optional: true}), 
          query(':leave', [
            style({
              position: 'absolute',
              left: '0%',
              top: 0, 
              bottom: 0 ,
              width: '100%',
              transform: 'scale(1)',
              opacity: 1
            }),
            animate('1.2s ease-in-out', style({
              left: '100%',
              transform: 'scale(.3)',
              opacity: .5
            }))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class DinamicWebPagesComponent implements OnChanges {
  @Input() currentRoute!: number;  

  ngOnChanges(changes: SimpleChanges) {
  }
}
