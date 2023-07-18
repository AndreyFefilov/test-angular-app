import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
} from '@taiga-ui/core';
import { TuiBlockStatusModule } from '@taiga-ui/layout';

import { GoBackDirective } from '@shared/directives';

const MODULES = [
  CommonModule,
  TuiButtonModule,
  TuiBlockStatusModule,
  TuiDialogModule,
  TuiAlertModule,
  GoBackDirective
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule {}