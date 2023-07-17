import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
} from '@taiga-ui/core';
import { TuiBlockStatusModule } from '@taiga-ui/layout';

const MODULES = [
  CommonModule,
  TuiButtonModule,
  TuiBlockStatusModule,
  TuiDialogModule,
  TuiAlertModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule {}