import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AtlantiaViewsModule } from './views/atlantia-views.module';
import { AtlantiaMainViewComponent } from './views/atlantia-main-view.component';
import { ImagePreloadResolver} from 'ngx-shared-front-atlantia'; 
import { SpinnerService } from 'ngx-shared-front-atlantia';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AtlantiaViewsModule
  ],
  bootstrap: [AtlantiaMainViewComponent],
  exports: [
  ],
  providers: [
    ImagePreloadResolver,
    SpinnerService
  ]
})
export class AppModule { }
