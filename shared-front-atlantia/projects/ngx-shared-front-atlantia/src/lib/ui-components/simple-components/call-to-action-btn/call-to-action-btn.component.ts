import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { appearDissapearWithZoom, callToActionType} from '../../../common';

@Component({
  selector: 'ngx-atlant-call-to-action-btn',
  templateUrl: './call-to-action-btn.component.html',
  styleUrls: ['./call-to-action-btn.component.scss'],
  animations: [
    appearDissapearWithZoom(.7)
  ]
})
export class CallToActionBtnComponent implements OnInit {
  ctaTypes = callToActionType;
  @Input() callToActionType : callToActionType = callToActionType.CLOSE;
  @HostBinding('@appearDisappearFromCenter') loksea = true; 

  ngOnInit(): void {
      
  }

}
