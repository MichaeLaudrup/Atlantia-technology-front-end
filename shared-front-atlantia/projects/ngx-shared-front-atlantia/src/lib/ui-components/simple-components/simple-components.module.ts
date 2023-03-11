import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicToggleMenuIconComponent } from './dinamic-toggle-menu-icon/dinamic-toggle-menu-icon.component';
import { GlobalSpinnerComponent } from './global-spinner/global-spinner.component';
import { ContentGenericBoxComponent } from './content-generic-box/content-generic-box.component';
import { TitleSubtitleComponent } from './title-subtitle/title-subtitle.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { SimpleListItemComponent } from './simple-list/simple-list-item/simple-list-item.component';
import { CallToActionBtnComponent } from './call-to-action-btn/call-to-action-btn.component';

const exportableComponents = [
  DinamicToggleMenuIconComponent,
  GlobalSpinnerComponent,
  ContentGenericBoxComponent,
  TitleSubtitleComponent,
  SimpleListComponent,
  CallToActionBtnComponent,
];

@NgModule({
  declarations: [
    ...exportableComponents,
    SimpleListItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...exportableComponents
  ]
})
export class SimpleComponentsModule { }
