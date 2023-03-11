import { NgModule } from '@angular/core';
import { ImagePreloadResolver} from 'ngx-shared-front-atlantia'; 
import { RouterModule, Routes } from '@angular/router';
import { AtlantiaHomeViewComponent } from './atlantia-home-view/atlantia-home-view.component';
import { AtlantiaAlejandriaViewComponent } from './atlantia-alejandria-view/atlantia-alejandria-view.component';
import { AtlantiaHermesViewComponent } from './atlantia-hermes-view/atlantia-hermes-view.component';

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
      loadChildren: () => import('./author-view/author.module').then(m => m.AuthorModule),
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