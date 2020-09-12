import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import {AUTH_ROUTES, EGF_ROUTES} from "./shared/routes/egf.routes";

import { AuthGuard } from './shared/authentification/guard/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    // redirectTo: 'dashboard/dashboard1',
    pathMatch: 'full',
  },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' },
    children: AUTH_ROUTES,
    // canActivate: [AuthGuard],
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' },
    children: EGF_ROUTES, canActivate: [AuthGuard],
  },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' },
    children: EGF_ROUTES, canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'pages/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
