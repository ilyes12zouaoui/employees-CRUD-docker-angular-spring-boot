import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccessNotification(message: string) {
    this.toastr.success(message);
  }
  showErrorNotification(message: string) {
    this.toastr.error(message,undefined,{timeOut: 3000});
  }
  showInfoNotification(message: string) {
    this.toastr.info(message);
  }
}
