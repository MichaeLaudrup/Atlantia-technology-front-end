import { NgModule } from '@angular/core';
import { ImagePreloadResolver} from 'ngx-shared-front-atlantia'; 
import { RouterModule, Routes } from '@angular/router';
import { AtlantiaHomeViewComponent } from './atlantia-home-view/atlantia-home-view.component';
import { AuthorViewComponent } from './author-view/author-view.component';
import { AtlantiaAlejandriaViewComponent } from './atlantia-alejandria-view/atlantia-alejandria-view.component';
import { AtlantiaHermesViewComponent } from './atlantia-hermes-view/atlantia-hermes-view.component';
import { ProfessionalExperienceComponent } from './author-view/professional-experience/professional-experience.component';
import { CoursesAndCertificatesComponent } from './author-view/courses-and-certificates/courses-and-certificates.component';
import { WhereToGoComponent } from './author-view/where-to-go/where-to-go.component';
import { AboutMeComponent } from './author-view/about-me/about-me.component';

const preloadImagesAuthorView = [
  'assets/author-images/professional-experience.jpg',
  'assets/author-images/tech-stack.jpg',
  'assets/author-images/courses-certitifcations.jpg',
  'assets/author-images/where-to-go.jpg',
  'assets/author-images/about-me.jpg',
  'assets/software-engineer.jpg'
];

const preloadImagesHomeView = [
  '/assets/atlantia-logo-white.png',
  '/assets/atlantia-logo-white-ligth.png',
  '/assets/atlantia-bg.jpg',
]; 


const routes: Routes = [
    {
        path: 'home',
        component:AtlantiaHomeViewComponent,
        data : { order: 0, imgToPreloadUrls: preloadImagesHomeView},
        resolve : {
          hasPreloaded : ImagePreloadResolver
        }
    },
    {
        path: 'about-me',
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
    {
      path: 'alejandria-project', component: AtlantiaAlejandriaViewComponent, data: { order: 2 }
    },
    {
      path: 'hermes-project', component: AtlantiaHermesViewComponent, data: { order: 3 }
    },
    {
      path:'**', redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AtlantiaRoutingModule { }