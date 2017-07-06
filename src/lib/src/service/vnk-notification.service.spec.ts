import { TestBed, inject } from '@angular/core/testing';
import {VnkNotificationService} from "./vnk-notification.service";

describe('VnkNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VnkNotificationService
      ]
    });
  });

  it('should create service', inject([VnkNotificationService], (service: VnkNotificationService) => {
    expect(service).toBeTruthy();
  }));

  it('should dispatch notification to observers', inject([VnkNotificationService], (service: VnkNotificationService) => {
    let notification = null;
    service.notifications.subscribe((n) => notification = n);
    service.open('Test');
  }));
});
