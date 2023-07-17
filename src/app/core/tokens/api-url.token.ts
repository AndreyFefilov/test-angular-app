import { InjectionToken } from '@angular/core';
import { environment } from '@environments/environment';

export const API_URL_TOKEN = new InjectionToken<string>('API Address', {
  factory: () => `${environment.api}/${environment.apiVersion}/`,
});
