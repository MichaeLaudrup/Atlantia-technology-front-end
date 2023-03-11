import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorViewComponent } from './author-view.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CoursesAndCertificatesComponent } from './courses-and-certificates/courses-and-certificates.component';
import { ExperiencesComponent } from './professional-experience/experiences/experiences.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { UiComponentsModule } from 'ngx-shared-front-atlantia';
import { RouterModule } from '@angular/router';
import { AuthorViewRoutingModule } from './author-view-routing.module';
import { ExperienceComponent } from './professional-experience/experiences/experience/experience.component';

const exportComponents = [
  AuthorViewComponent,
  ProfessionalExperienceComponent,
  WhereToGoComponent,
  AboutMeComponent,
  CoursesAndCertificatesComponent,
  ExperiencesComponent
]; 

@NgModule({
  declarations: [
    ...exportComponents,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    AuthorViewRoutingModule
  ],
  exports: [
    ...exportComponents
  ]
})
export class AuthorModule { }
