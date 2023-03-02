import { NgModule } from '@angular/core';
import { VerticalInteractiveMenuComponent } from 'ngx-shared-front-atlantia'; 
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AtlantiaHomeViewComponent } from './atlantia-home-view/atlantia-home-view.component';
import { AuthorViewComponent } from './author-view/author-view.component';
import { AtlantiaAlejandriaViewComponent } from './atlantia-alejandria-view/atlantia-alejandria-view.component';
import { AtlantiaHermesViewComponent } from './atlantia-hermes-view/atlantia-hermes-view.component';
const routes: Routes = [
    {
        path: 'home', component:AtlantiaHomeViewComponent, data : { order: 0},
    },
    {
        path: 'about-me', component: AuthorViewComponent, data: { order: 1 }, children: [
          { path: 'menu', component: VerticalInteractiveMenuComponent }
        ]
    },
    {
      path: 'alejandria-project', component: AtlantiaAlejandriaViewComponent, data: { order: 2 }
    },
    {
      path: 'hermes-project', component: AtlantiaHermesViewComponent, data: { order: 3 }
    }
    /* {
      path: '', component: NutriGlobalLayoutComponent,
      canActivate: [userLogedGuard],
      resolve: {
        userData: UserDataResolver
      },
      children: [ {path:'nutri-form', loadChildren: () => import('./modules/nutri-form/nutri-form.module').then( m => m.FormularioNutricionalModule), data: {animation: 'nutri-form'}},
                  {path:'nutri-data', loadChildren: () => import('./modules/dashboard-data/dashboard-data.module').then( m => m.DashboardDataModule), data: {animation: 'nutri-data'}},
                  {path:'nutri-store', loadChildren: () => import('./modules/store-room/store-room.module').then(m => m.StoreRoomModule), data: {animation: 'nutri-store'}},
                  {path: 'nutri-diet', loadChildren: () => import('./modules/diet/diet.module').then(m => m.DietModule), data: {animation: 'nutri-diet'}},
                  {path:'**', redirectTo: 'nutri-form'}]
    } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AtlantiaRoutingModule { }