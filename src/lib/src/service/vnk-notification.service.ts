import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

export enum VnkNotificationType {
  Success,
  Info,
  Danger,
  Warning
}

export interface VnkNotificationPayload {
  title: string;
  text: string;
  duration: number,
  type: VnkNotificationType
}

@Injectable()
export class VnkNotificationService {
  private static _defaultDuration = 2000;

  private _notifications: Subject<VnkNotificationPayload> = new Subject<VnkNotificationPayload>();

  get notifications() {
    return this._notifications as Observable<VnkNotificationPayload>;
  }

  private _simpleOpen(text: string, title: string = null): void {
    this._checkObservers();

    let payload: VnkNotificationPayload = {
      title: title,
      text: text,
      duration: VnkNotificationService._defaultDuration,
      type: VnkNotificationType.Info
    };
    this._notifications.next(payload);
  }

  private _openWithPayload(payload: VnkNotificationPayload): void {
    this._checkObservers();
    this._notifications.next(payload);
  }

  public open(textOrPayload: any, title?: string){
    if(textOrPayload && typeof textOrPayload == 'string'){
      this._simpleOpen(textOrPayload, title);
      return;
    }
    this._openWithPayload(textOrPayload);
  }

  private _checkObservers() {
    if (this._notifications.observers.length == 0) {
      throw Error('There is no notification observer. Have you included a VnkNotificationComponent on your templates?')
    }
  }
}
