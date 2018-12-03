import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningRoundPracticeComponent } from './lightning-round-practice.component';

describe('LightningRoundPracticeComponent', () => {
  let component: LightningRoundPracticeComponent;
  let fixture: ComponentFixture<LightningRoundPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningRoundPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningRoundPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
