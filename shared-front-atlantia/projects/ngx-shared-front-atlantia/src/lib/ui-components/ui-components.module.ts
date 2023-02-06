import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicNavBarComponent } from './dinamic-nav-bar/dinamic-nav-bar.component';
import { SimpleNavBarContentComponent } from './dinamic-nav-bar/simple-nav-bar-content/simple-nav-bar-content.component';
import { DinamicWebPagesComponent } from './dinamic-web-pages/dinamic-web-pages.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleComponentsModule } from './simple-components';

@NgModule({
  declarations: [
    DinamicNavBarComponent,
    SimpleNavBarContentComponent,
    DinamicWebPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    SimpleComponentsModule
  ],
  exports: [
    DinamicNavBarComponent,
    DinamicWebPagesComponent
  ]
})
export class UiComponentsModule { }
