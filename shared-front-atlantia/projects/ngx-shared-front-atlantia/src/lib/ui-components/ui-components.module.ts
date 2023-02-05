import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicNavBarComponent } from './dinamic-nav-bar/dinamic-nav-bar.component';
import { SimpleNavBarContentComponent } from './dinamic-nav-bar/simple-nav-bar-content/simple-nav-bar-content.component';
import { DinamicWebPagesComponent } from './dinamic-web-pages/dinamic-web-pages.component';



@NgModule({
  declarations: [
    DinamicNavBarComponent,
    SimpleNavBarContentComponent,
    DinamicWebPagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DinamicNavBarComponent,
    DinamicWebPagesComponent
  ]
})
export class UiComponentsModule { }
