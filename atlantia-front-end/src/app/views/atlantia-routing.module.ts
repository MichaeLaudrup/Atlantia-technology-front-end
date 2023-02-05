import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtlantiaRoutingModule { }