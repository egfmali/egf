import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'profils',
    loadChildren: () => import('./profils/profils.module').then(m => m.ProfilsModule)
  },
  {
    path: 'transporteurs',
    loadChildren: () => import('./transporteurs/transporteurs.module').then(m => m.TransporteursModule)
  },
  {
    path: 'expediteurs',
    loadChildren: () => import('./expediteurs/expediteurs.module').then(m => m.ExpediteursModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule { }