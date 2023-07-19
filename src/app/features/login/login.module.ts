import { NgModule } from '@angular/core';

import { TuiButtonModule } from '@taiga-ui/core';

import { LoginRoutingModule } from '@features/login/login-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './containers/login.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    TuiButtonModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule {}