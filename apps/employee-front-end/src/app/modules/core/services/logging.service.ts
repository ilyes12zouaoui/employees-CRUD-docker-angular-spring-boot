import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    logError(message: string) {
        console.error('LoggingService: ERROR :' + message);
    }

    logInfo(message: string) {
        console.log('LoggingService: INFO :' + message);
    }

    logInfoObject(message: any) {
        console.log('LoggingService: INFO :',message);
    }

    logWarn(message: string) {
        console.log('LoggingService: WARN :' + message);
    }
}
