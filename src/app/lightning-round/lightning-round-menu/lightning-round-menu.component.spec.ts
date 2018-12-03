import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningRoundMenuComponent } from './lightning-round-menu.component';

describe('LightningRoundMenuComponent', () => {
  let component: LightningRoundMenuComponent;
  let fixture: ComponentFixture<LightningRoundMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningRoundMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningRoundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
