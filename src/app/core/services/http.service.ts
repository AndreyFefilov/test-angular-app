import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ApiResponse, ObservableApiResponse } from '@core/models';
import { API_URL_TOKEN } from '@core/tokens/api-url.token';

type Params = HttpParams | { [param: string]: any} ;

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly http = inject(HttpClient);
  private readonly host = inject(API_URL_TOKEN);

  get<T>(
    url: string,
    params: Params = new HttpParams(),
    headers: HttpHeaders = new HttpHeaders(),
    providedHost?: string,
  ): ObservableApiResponse<T> {
    return this.http.get<ApiResponse<T>>(`${providedHost ?? this.host}${url}`, { params, headers });
  }

  post<T>(
    url: string,
    body = {},
    params: Params = new HttpParams(),
    headers: HttpHeaders = new HttpHeaders(),
    providedHost?: string
  ): ObservableApiResponse<T> {
    return this.http.post<ApiResponse<T>>(`${providedHost ?? this.host}${url}`, body, { params, headers });
  }
}
