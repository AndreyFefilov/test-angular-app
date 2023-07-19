import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesPathsEnum } from '@core/enums';
import { AuthGuard } from '@core/guards';

const APP_ROUTES: Routes = [
  {
    path: RoutesPathsEnum.Login,
    loadChildren: () => import('@features/login/login.module').then(m => m.LoginModule),
    title: 'Авторизация'
  },
  {
    path: RoutesPathsEnum.Home,
    loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule),
    title: 'Главная'
  },
  {
    path: RoutesPathsEnum.Feed,
    loadChildren: () => import('@features/media/media.module').then(m => m.MediaModule),
    title: 'Медиа',
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

APP_ROUTES.forEach((route) => {
  if (!route.redirectTo) {
    route.canActivate = [AuthGuard];
  }
});

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
