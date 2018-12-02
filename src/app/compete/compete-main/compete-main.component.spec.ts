import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeteMainComponent } from './compete-main.component';

describe('CompeteMainComponent', () => {
  let component: CompeteMainComponent;
  let fixture: ComponentFixture<CompeteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
