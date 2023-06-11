import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartboradComponent } from './chartborad.component';

describe('ChartboradComponent', () => {
  let component: ChartboradComponent;
  let fixture: ComponentFixture<ChartboradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartboradComponent]
    });
    fixture = TestBed.createComponent(ChartboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
