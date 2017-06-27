import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VinkelDummyComponent } from './dummy.component';

describe('VinkelDummyComponent', function () {
  let de: DebugElement;
  let comp: VinkelDummyComponent;
  let fixture: ComponentFixture<VinkelDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VinkelDummyComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinkelDummyComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <h2> text', () => {
    fixture.detectChanges();
    const h2 = de.nativeElement;
    expect(h2.innerText).toMatch(/angular/i,
      '<h2> should say something about "Angular"');
  });
});
