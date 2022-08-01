import { ToastrService } from 'ngx-toastr';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './services/logging.service';
import { NotificationService } from './services/notification.service';
//import { NotificationService } from './services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private zone: NgZone) {}

  handleError(error: Error | HttpErrorResponse) {
    const logger = this.injector.get(LoggingService);
    logger.logError('error');
    console.error(error);
  }
}
