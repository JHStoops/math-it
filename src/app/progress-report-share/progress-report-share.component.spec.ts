import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressReportShareComponent } from './progress-report-share.component';

describe('ProgressReportShareComponent', () => {
  let component: ProgressReportShareComponent;
  let fixture: ComponentFixture<ProgressReportShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressReportShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressReportShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
