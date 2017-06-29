import {Component, OnInit} from '@angular/core';
import {VnkNotificationPayload, VnkNotificationService, VnkNotificationType} from "../service/vnk-notification.service";

@Component({
  selector: 'vnk-notification',
  templateUrl: './vnk-notification.component.html',
  styleUrls: ['./vnk-notification.component.scss']
})
export class VnkNotificationComponent implements OnInit {
  _title: string = null;
  _text: string = '';
  _show: boolean = false;
  _type: VnkNotificationType = VnkNotificationType.Info;
  _vnkNotificationTypes = VnkNotificationType;
  _lastTimeout: any;

  constructor(private _service: VnkNotificationService) {
  }

  ngOnInit() {
    this._service.notifications.subscribe((p: VnkNotificationPayload) => {
      this._show = true;
      this._text = p.text;
      this._title = p.title;
      this._type = p.type;

      if(p.duration && p.duration > 0){
        this._lastTimeout = setTimeout(() => this._show = false, p.duration);
      }
    });
  }

  onClose(){
    this._show = false;
    clearTimeout(this._lastTimeout);
  }
}
