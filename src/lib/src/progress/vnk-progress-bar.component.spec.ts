import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {VnkProgressBarComponent} from "./vnk-progress-bar.component";
import {By} from "@angular/platform-browser";

describe('VnkProgressBarComponent', function () {
  let comp: VnkProgressBarComponent;
  let fixture: ComponentFixture<VnkProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VnkProgressBarComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnkProgressBarComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should update progress when value changes', () => {
    comp.value = 27;
    fixture.detectChanges();
    const progressDiv = fixture.debugElement.query(By.css('.progress-bar'));
    expect(progressDiv).toBeDefined();
    expect(progressDiv.styles['width']).toBe('27%');
  });

  it('should show an indeterminated progress when set to', () => {
    comp.value = 27;
    comp.determinated = false;
    fixture.detectChanges();

    const progressDiv = fixture.debugElement.query(By.css('.progress-bar'));
    expect(progressDiv).toBeDefined();
    expect(progressDiv.styles['width']).toBe('0%');
    expect(progressDiv.classes['determinate']).toBeFalsy();
    expect(progressDiv.classes['indeterminate']).toBeTruthy();
  });

  it('should set height when set', () => {
    comp.height = 50;
    fixture.detectChanges();
    const progressDiv = fixture.debugElement.query(By.css('.progress-bar'));
    expect(progressDiv).toBeDefined();
    expect(progressDiv.styles['height']).toBe('50px');
  });

  it('should set progress bar class when set', () => {
    comp.progressClass = 'bg-success';
    comp.determinated = false;
    fixture.detectChanges();

    const progressDiv = fixture.debugElement.query(By.css('.progress-bar'));
    expect(progressDiv).toBeDefined();
    expect(progressDiv.classes['bg-success']).toBeTruthy();
  });
});
