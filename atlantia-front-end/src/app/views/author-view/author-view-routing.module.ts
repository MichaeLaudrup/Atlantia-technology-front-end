import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorViewComponent } from "./author-view.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { CoursesAndCertificatesComponent } from "./courses-and-certificates/courses-and-certificates.component";
import { ProfessionalExperienceComponent } from "./professional-experience/professional-experience.component";
import { WhereToGoComponent } from "./where-to-go/where-to-go.component";
import { ImagePreloadResolver } from "ngx-shared-front-atlantia";

const preloadImagesAuthorView = [
  'assets/author-images/professional-experience.jpg',
  'assets/author-images/tech-stack.jpg',
  'assets/author-images/courses-certitifcations.jpg',
  'assets/author-images/where-to-go.jpg',
  'assets/author-images/about-me.jpg',
  'assets/software-engineer.jpg'
];

const routes : Routes = [
  {
    path: '', 
    component: AuthorViewComponent,
    data: { order: 1, imgToPreloadUrls: preloadImagesAuthorView },
    children: [
      { path: 'professional-experience', component: ProfessionalExperienceComponent },
      { path: 'courses-and-certificates', component: CoursesAndCertificatesComponent},
      { path: 'where-to-go', component: WhereToGoComponent}, 
      { path: 'me', component: AboutMeComponent}
    ],
    resolve : {
      hasPreloaded : ImagePreloadResolver
    }
  },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorViewRoutingModule { }