import { Pipe, PipeTransform } from '@angular/core';

import { convertNumberDateToDateTimeString } from '@core/utils';

@Pipe({ name: 'numberToDate' })
export class NumberToDatePipe implements PipeTransform {
  transform(value: number): string {
    return convertNumberDateToDateTimeString(value);
  }
}
