import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePlansComponent } from './future-plans.component';

describe('FuturePlansComponent', () => {
  let component: FuturePlansComponent;
  let fixture: ComponentFixture<FuturePlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuturePlansComponent]
    });
    fixture = TestBed.createComponent(FuturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
