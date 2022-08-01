import { NotificationService } from './services/notification.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, retry, tap, throwError, timer } from 'rxjs';
import { LoggingService } from './services/logging.service';
import { SpinnerService } from './services/Spinner.service';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  constructor(
    private loggingService: LoggingService,
    private notificationService: NotificationService,
  ) {}
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loggingService.logInfo('request sending');
    this.loggingService.logInfoObject(httpRequest);

    const http$ = next.handle(httpRequest).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.loggingService.logInfo('received response');
          this.loggingService.logInfoObject(event);
        }
      }),
      retry({
        count: 1,
        delay: (_, retryCount) => {
          this.loggingService.logWarn(
            `Attempt ${retryCount}: retrying in ${retryCount * 1000}ms`
          );
          return timer(retryCount * 1000);
        },
      }),
      catchError((error)=>{
        this.notificationService.showErrorNotification("connection error occurred")
        return throwError(()=>error)
      })
      )
    ;
    return http$;
  }
}
