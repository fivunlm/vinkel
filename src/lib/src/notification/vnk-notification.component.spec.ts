import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {VnkNotificationComponent} from "./vnk-notification.component";
import {VnkNotificationService, VnkNotificationType} from "../service/vnk-notification.service";

@Component({
  template: '<vnk-notification></vnk-notification>'
})
export class TestVnkNotificationHostComponent {
}

describe('VnkNotificationComponent', function () {
  let comp: TestVnkNotificationHostComponent;
  let fixture: ComponentFixture<TestVnkNotificationHostComponent>;
  let service: VnkNotificationService = new VnkNotificationService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VnkNotificationComponent,
        TestVnkNotificationHostComponent
      ],
      providers: [
        {provide: VnkNotificationService, useValue: service}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVnkNotificationHostComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should show title and text when set', () => {
    fixture.detectChanges();
    service.open('Test Text', 'Test Title');
    fixture.detectChanges();
    const alert: DebugElement = fixture.debugElement.query(By.css('.alert'));
    expect(alert).toBeDefined();
    expect(alert.nativeElement.innerText).toContain('Test Text');
    const strong: DebugElement = alert.query(By.css('strong'));
    expect(strong.nativeElement).toBeDefined();
    expect(strong.nativeElement.innerText).toBe('Test Title');
  });

  it('should not show if not opened', () => {
    fixture.detectChanges();
    const alert: DebugElement = fixture.debugElement.query(By.css('.alert'));
    expect(alert).toBeNull();
  });

  it('should close after duration timeout', fakeAsync(() => {
    fixture.detectChanges();
    service.open({title: 'Test Title', test: 'Test Text', duration: 2000, type: VnkNotificationType.Info});
    fixture.detectChanges();
    const alert: DebugElement = fixture.debugElement.query(By.css('.alert'));
    expect(alert).toBeDefined();
    tick(3000);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const alert: DebugElement = fixture.debugElement.query(By.css('.alert'));
      expect(alert).toBeNull();
    })

  }));

  it('should close when close button is clicked', () => {
    fixture.detectChanges();
    service.open({title: 'Test Title', test: 'Test Text', duration: 0, type: VnkNotificationType.Info});
    fixture.detectChanges();
    const alert: DebugElement = fixture.debugElement.query(By.css('.alert'));
    expect(alert).toBeDefined();
    const closeButton: DebugElement = fixture.debugElement.query(By.css('.close'));
    expect(closeButton).toBeDefined();
    closeButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    const alertAfterClose: DebugElement = fixture.debugElement.query(By.css('.alert'));
    expect(alertAfterClose).toBeNull();
  });
});
