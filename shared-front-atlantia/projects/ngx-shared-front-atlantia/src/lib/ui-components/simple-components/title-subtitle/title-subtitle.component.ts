import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-atlant-title-subtitle',
  templateUrl: './title-subtitle.component.html',
  styleUrls: ['./title-subtitle.component.scss']
})
export class TitleSubtitleComponent {
  @Input() title: string = "Title test 1"; 
  @Input() subtitle: string = "subtitle test 1"; 
  @Input() imgPathSrc: (string | undefined) = undefined; 
}
