import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeteClassComponent } from './compete-class.component';

describe('CompeteClassComponent', () => {
  let component: CompeteClassComponent;
  let fixture: ComponentFixture<CompeteClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeteClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeteClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
