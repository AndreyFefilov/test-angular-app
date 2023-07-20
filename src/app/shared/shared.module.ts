import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import {
  TuiAlertModule,
  TuiButtonModule,
  TuiHintModule,
  TuiLoaderModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiBlockStatusModule } from '@taiga-ui/layout';

import { DeclensionRuDirective, GoBackDirective } from '@shared/directives';
import { NumberToDatePipe } from '@shared/pipes';

const MODULES = [
  CommonModule,
  GoBackDirective,
  TuiButtonModule,
  TuiBlockStatusModule,
  TuiAlertModule,
  TuiLoaderModule,
  TuiIslandModule,
  TuiHintModule,
  TuiSvgModule
];

const DIRECTIVES = [
  NumberToDatePipe,
  DeclensionRuDirective,
]

@NgModule({
  declarations: DIRECTIVES,
  imports: MODULES,
  exports: [
    ...MODULES,
    ...DIRECTIVES
  ],
  providers: [DecimalPipe]
})
export class SharedModule {}