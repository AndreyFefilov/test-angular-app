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
import { HashtagMentionColorizerPipe, NumberToDatePipe } from '@shared/pipes';

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

const DECLARATIONS = [
  NumberToDatePipe,
  DeclensionRuDirective,
  HashtagMentionColorizerPipe
]

@NgModule({
  declarations: DECLARATIONS,
  imports: MODULES,
  exports: [
    ...MODULES,
    ...DECLARATIONS
  ],
  providers: [DecimalPipe]
})
export class SharedModule {}