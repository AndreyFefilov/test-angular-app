import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ApiResponse, ObservableApiResponse } from '@core/models';
import { environment } from '@environments/environment';

type Params = HttpParams | { [param: string]: any} ;

const HOST = environment.api;

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly http = inject(HttpClient);

  get<T>(
    url: string,
    params: Params = new HttpParams(),
    headers: HttpHeaders = new HttpHeaders(),
    providedHost: string = HOST,
  ): ObservableApiResponse<T> {
    return this.http.get<ApiResponse<T>>(`${providedHost}${url}`, { params, headers });
  }

  post<T>(
    url: string,
    body = {},
    params: Params = new HttpParams(),
    headers: HttpHeaders = new HttpHeaders(),
    providedHost: string = HOST
  ): ObservableApiResponse<T> {
    return this.http.post<ApiResponse<T>>(`${providedHost}${url}`, body, { params, headers });
  }
}
