import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicNavBarComponent } from './dinamic-nav-bar/dinamic-nav-bar.component';



@NgModule({
  declarations: [
    DinamicNavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DinamicNavBarComponent
  ]
})
export class UiComponentsModule { }
