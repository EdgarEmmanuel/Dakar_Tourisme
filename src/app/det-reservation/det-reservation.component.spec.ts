import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetReservationComponent } from './det-reservation.component';

describe('DetReservationComponent', () => {
  let component: DetReservationComponent;
  let fixture: ComponentFixture<DetReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
