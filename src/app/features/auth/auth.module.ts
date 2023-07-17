import { NgModule } from '@angular/core';

import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { TuiButtonModule } from '@taiga-ui/core';

import { AuthRoutingModule } from '@features/auth/auth-routing.module';
import { AuthComponent } from './containers/auth.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    TuiIslandModule,
    TuiBlockStatusModule,
    TuiButtonModule
  ],
  declarations: [
    AuthComponent
  ],
})
export class AuthModule {}