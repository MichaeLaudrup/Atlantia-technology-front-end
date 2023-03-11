import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentsModule} from 'ngx-shared-front-atlantia'; 
import { AtlantiaHomeViewComponent } from './atlantia-home-view/atlantia-home-view.component';
import { AtlantiaHermesViewComponent } from './atlantia-hermes-view/atlantia-hermes-view.component';
import { AtlantiaAlejandriaViewComponent } from './atlantia-alejandria-view/atlantia-alejandria-view.component';
import { AtlantiaRoutingModule } from './atlantia-routing.module';
import { AtlantiaMainViewComponent } from './atlantia-main-view.component';
import { AuthorModule } from './author-view/author.module';
import { VerticalTestComponent } from './atlantia-alejandria-view/vertical-test/vertical-test.component';


@NgModule({
  declarations: [
    AtlantiaHomeViewComponent,
    AtlantiaHermesViewComponent,
    AtlantiaAlejandriaViewComponent,
    AtlantiaMainViewComponent,
    VerticalTestComponent,
  ],
  imports: [
    CommonModule,
    AtlantiaRoutingModule,
    AuthorModule,
    UiComponentsModule
  ],
  exports: [
    AtlantiaMainViewComponent
  ],
})
export class AtlantiaViewsModule { }
