import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressReportSavedComponent } from './progress-report-saved.component';

describe('ProgressReportSavedComponent', () => {
  let component: ProgressReportSavedComponent;
  let fixture: ComponentFixture<ProgressReportSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressReportSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressReportSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
