import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentsModule } from 'ngx-shared-front-atlantia'; 
import { AtlantiaHomeViewComponent } from './atlantia-home-view/atlantia-home-view.component';
import { AtlantiaHermesViewComponent } from './atlantia-hermes-view/atlantia-hermes-view.component';
import { AtlantiaAlejandriaViewComponent } from './atlantia-alejandria-view/atlantia-alejandria-view.component';
import { AtlantiaRoutingModule } from './atlantia-routing.module';
import { AtlantiaMainViewComponent } from './atlantia-main-view.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AtlantiaHomeViewComponent,
    AtlantiaHermesViewComponent,
    AtlantiaAlejandriaViewComponent,
    AtlantiaMainViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AtlantiaRoutingModule,
    UiComponentsModule
  ],
  exports: [
    AtlantiaMainViewComponent
  ]
})
export class AtlantiaViewsModule { }
