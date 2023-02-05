import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AtlantiaViewsModule } from './views/atlantia-views.module';
import { AtlantiaMainViewComponent } from './views/atlantia-main-view.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtlantiaViewsModule
  ],
  providers: [],
  bootstrap: [AtlantiaMainViewComponent],
  exports: [
  ]
})
export class AppModule { }
