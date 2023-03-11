import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicNavBarComponent } from './dinamic-nav-bar/dinamic-nav-bar.component';
import { SimpleNavBarContentComponent } from './dinamic-nav-bar/simple-nav-bar-content/simple-nav-bar-content.component';
import { DinamicWebPagesComponent } from './dinamic-web-pages/dinamic-web-pages.component';
import { RouterModule } from '@angular/router';
import { SimpleComponentsModule } from './simple-components';
import { VerticalInteractiveMenuComponent } from './vertical-interactive-menu/vertical-interactive-menu.component';
import { ImagePreloadResolver } from '../common';
import { InteractiveCarrouselComponent } from './interactive-carrousel/interactive-carrousel.component';

const exportableComponents = [
  DinamicNavBarComponent,
  DinamicWebPagesComponent,
  VerticalInteractiveMenuComponent,
  InteractiveCarrouselComponent,
]; 

@NgModule({
  declarations: [
    ...exportableComponents,
    SimpleNavBarContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SimpleComponentsModule
  ],
  exports: [
    ...exportableComponents,
    SimpleComponentsModule
  ],
  providers: [
    ImagePreloadResolver
  ]
})
export class UiComponentsModule { }
