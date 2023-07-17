import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesPathsEnum} from "@core/enums";

const APP_ROUTES: Routes = [
  {
    path: RoutesPathsEnum.Auth,
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    title: 'Авторизация'
  },
  {
    path: RoutesPathsEnum.Home,
    // canActivate: [],
    loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule),
    title: 'Главная'
  },
  {
    path: RoutesPathsEnum.Feed,
    // canActivate: [],
    loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule),
    title: 'Медиа'
  },
  {
    path: '',
    redirectTo: RoutesPathsEnum.Home,
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('@core/components/not-found/not-found.component')
      .then(c => c.NotFoundComponent),
    title: 'Ошибка 404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
