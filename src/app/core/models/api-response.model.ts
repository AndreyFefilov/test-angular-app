import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse<T> {
  body: ReadableStream;
  bodyUsed: boolean;
  data: T;
  error: unknown;
  headers: HttpHeaders;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}

export type ObservableApiResponse<T> = Observable<ApiResponse<T>>;
