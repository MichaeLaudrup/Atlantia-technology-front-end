import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AtlantiaViewsModule } from './views/atlantia-views.module';
import { AtlantiaMainViewComponent } from './views/atlantia-main-view.component';
import { ImagePreloadResolver} from 'ngx-shared-front-atlantia'; 
import { SpinnerService } from 'ngx-shared-front-atlantia';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AtlantiaViewsModule
  ],
  bootstrap: [AtlantiaMainViewComponent],
  exports: [
  ],
  providers: [
    SpinnerService
  ]
})
export class AppModule { }
