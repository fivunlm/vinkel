import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {VnkDropZoneDirective} from "./vnk-drop-zone.directive";

@Component({
  template: '<div vnkDropZone></div>'
})
export class TestVnkDropZoneDirectiveHostComponent {
}

describe('VnkDropZoneDirective', function () {
  let comp: TestVnkDropZoneDirectiveHostComponent;
  let fixture: ComponentFixture<TestVnkDropZoneDirectiveHostComponent>;
  let dropZone: DebugElement;
  let dropZoneDirective: VnkDropZoneDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VnkDropZoneDirective,
        TestVnkDropZoneDirectiveHostComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVnkDropZoneDirectiveHostComponent);
    comp = fixture.componentInstance;
    dropZone = fixture.debugElement.query(By.directive(VnkDropZoneDirective));
    dropZoneDirective = dropZone.injector.get<VnkDropZoneDirective>(VnkDropZoneDirective);
  });

  it('should create component and found drop zone', () => {
    expect(comp).toBeDefined();
    expect(dropZone).toBeTruthy();
    expect(dropZoneDirective).toBeTruthy();
  });

  it('should emit over event when dragging over zone', () => {
    let eventFired = false;
    dropZoneDirective.over.subscribe(() => eventFired = true);
    dropZone.triggerEventHandler('dragover', { preventDefault: () => {} });
    fixture.detectChanges();
    expect(eventFired).toBeTruthy();
  });

  it('should emit leave event when dragging out of zone', () => {
    let eventFired = false;
    dropZoneDirective.leave.subscribe(() => eventFired = true);
    dropZone.triggerEventHandler('dragleave', { preventDefault: () => {} });
    fixture.detectChanges();
    expect(eventFired).toBeTruthy();
  });

  it('should emit files event when dropping files over zone', () => {
    let files = null;
    dropZoneDirective.files.subscribe((fs: any) => files = fs);
    let event = {
      preventDefault: () => {},
      dataTransfer: {
        files: {
          length: 1
        }
      }
    };
    dropZone.triggerEventHandler('drop', event);
    fixture.detectChanges();
    expect(files).toBe(event.dataTransfer.files);
  });

});
