import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCalculatorComponent } from './holiday-calculator.component';

describe('HolidayCalculatorComponent', () => {
  let component: HolidayCalculatorComponent;
  let fixture: ComponentFixture<HolidayCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
