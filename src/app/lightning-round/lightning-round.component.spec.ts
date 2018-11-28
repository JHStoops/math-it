import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningRoundComponent } from './lightning-round.component';

describe('LightningRoundComponent', () => {
  let component: LightningRoundComponent;
  let fixture: ComponentFixture<LightningRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
