import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentsModule} from 'ngx-shared-front-atlantia'; 
import { AtlantiaHomeViewComponent } from './atlantia-home-view/atlantia-home-view.component';
import { AtlantiaHermesViewComponent } from './atlantia-hermes-view/atlantia-hermes-view.component';
import { AtlantiaAlejandriaViewComponent } from './atlantia-alejandria-view/atlantia-alejandria-view.component';
import { AtlantiaRoutingModule } from './atlantia-routing.module';
import { AtlantiaMainViewComponent } from './atlantia-main-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorViewComponent } from './author-view/author-view.component';
import { ProfessionalExperienceComponent } from './author-view/professional-experience/professional-experience.component';
import { WhereToGoComponent } from './author-view/where-to-go/where-to-go.component';
import { AboutMeComponent } from './author-view/about-me/about-me.component';
import { CoursesAndCertificatesComponent } from './author-view/courses-and-certificates/courses-and-certificates.component';


@NgModule({
  declarations: [
    AtlantiaHomeViewComponent,
    AtlantiaHermesViewComponent,
    AtlantiaAlejandriaViewComponent,
    AtlantiaMainViewComponent,
    AuthorViewComponent,
    ProfessionalExperienceComponent,
    WhereToGoComponent,
    AboutMeComponent,
    CoursesAndCertificatesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AtlantiaRoutingModule,
    UiComponentsModule
  ],
  exports: [
    AtlantiaMainViewComponent
  ],
})
export class AtlantiaViewsModule { }
