import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '@features/auth/containers/auth.component';

const AUTH_ROUTES: Routes = [{
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }