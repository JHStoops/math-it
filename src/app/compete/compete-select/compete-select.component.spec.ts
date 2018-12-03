import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeteSelectComponent } from './compete-select.component';

describe('CompeteSelectComponent', () => {
  let component: CompeteSelectComponent;
  let fixture: ComponentFixture<CompeteSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeteSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeteSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
