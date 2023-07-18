import { NgModule } from '@angular/core';

import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';

import { LoginRoutingModule } from '@features/login/login-routing.module';
import { LoginComponent } from './containers/login.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    TuiIslandModule,
    TuiBlockStatusModule,
    TuiButtonModule,
    TuiLoaderModule
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule {}