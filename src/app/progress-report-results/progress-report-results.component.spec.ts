import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressReportResultsComponent } from './progress-report-results.component';

describe('ProgressReportResultsComponent', () => {
  let component: ProgressReportResultsComponent;
  let fixture: ComponentFixture<ProgressReportResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressReportResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressReportResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
