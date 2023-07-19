import { inject, Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {TuiAlertService, TuiNotification} from '@taiga-ui/core';
import { first, Observable, throwError } from 'rxjs';

const ERROR_MESSAGE = 'Произошла ошибка при выполнении запроса';

@Injectable({ providedIn: 'root' })
export class ErrorsHandlerService {
  private readonly alertService = inject(TuiAlertService);

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status) {
      const code = error.status;
      let message = ERROR_MESSAGE;

      switch (code) {
        case 403:
          message = 'У вас нет прав на выполнение данной операции';
          break;

        case 404:
          message = 'Данные не найдены';
          break;
      }

      this.showErrorMessage(message, code);
    } else {
      this.showErrorMessage();
    }

    return throwError(() => error);
  }

  private showErrorMessage(message = ERROR_MESSAGE, statusCode?: number) {
    this.alertService
      .open(message, { label: statusCode ?? '', status: TuiNotification.Error })
      .pipe(first())
      .subscribe();
  }
}