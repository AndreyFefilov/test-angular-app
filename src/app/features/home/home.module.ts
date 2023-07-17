import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '@features/home/home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './containers/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
