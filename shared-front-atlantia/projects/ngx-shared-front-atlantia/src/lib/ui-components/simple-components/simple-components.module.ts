import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicToggleMenuIconComponent } from './dinamic-toggle-menu-icon/dinamic-toggle-menu-icon.component';
import { GlobalSpinnerComponent } from './global-spinner/global-spinner.component';

const exportableComponents = [DinamicToggleMenuIconComponent, GlobalSpinnerComponent];

@NgModule({
  declarations: [
    ...exportableComponents,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...exportableComponents
  ]
})
export class SimpleComponentsModule { }
