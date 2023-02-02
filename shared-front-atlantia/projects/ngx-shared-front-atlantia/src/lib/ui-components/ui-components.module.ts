import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicNavBarComponent } from './dinamic-nav-bar/dinamic-nav-bar.component';
import { SimpleNavBarContentComponent } from './dinamic-nav-bar/simple-nav-bar-content/simple-nav-bar-content.component';



@NgModule({
  declarations: [
    DinamicNavBarComponent,
    SimpleNavBarContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DinamicNavBarComponent
  ]
})
export class UiComponentsModule { }
