import {Component} from '@angular/core';
import {VnkNotificationPayload, VnkNotificationService, VnkNotificationType} from 'vinkel';


@Component({
  templateUrl: './notification-demo.component.html'
})
export class NotificationDemoComponent {
  constructor(private _service: VnkNotificationService) {
  }

  onShowBasicNotification() {
    this._service.open('This is a notification!', 'Hey!');
  }

  onShowError() {
    let payload: VnkNotificationPayload = {
      title: 'Error!',
      text: 'This is an error example',
      duration: 3000,
      type: VnkNotificationType.Danger
    };
    this._service.open(payload);
  }
}
