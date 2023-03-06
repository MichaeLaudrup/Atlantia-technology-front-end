import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicNavBarComponent } from './dinamic-nav-bar/dinamic-nav-bar.component';
import { SimpleNavBarContentComponent } from './dinamic-nav-bar/simple-nav-bar-content/simple-nav-bar-content.component';
import { DinamicWebPagesComponent } from './dinamic-web-pages/dinamic-web-pages.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleComponentsModule } from './simple-components';
import { VerticalInteractiveMenuComponent } from './vertical-interactive-menu/vertical-interactive-menu.component';
import { MenuItemSizePipe } from '../common/pipes/menu-item-height.pipe';
import { ImagePreloadResolver } from '../common';

@NgModule({
  declarations: [
    DinamicNavBarComponent,
    SimpleNavBarContentComponent,
    DinamicWebPagesComponent,
    VerticalInteractiveMenuComponent,
    MenuItemSizePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    SimpleComponentsModule
  ],
  exports: [
    DinamicNavBarComponent,
    DinamicWebPagesComponent,
    VerticalInteractiveMenuComponent,
    SimpleComponentsModule
  ],
  providers: [
    ImagePreloadResolver
  ]
})
export class UiComponentsModule { }
