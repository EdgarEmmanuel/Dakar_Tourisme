import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneReservComponent } from './one-reserv.component';

describe('OneReservComponent', () => {
  let component: OneReservComponent;
  let fixture: ComponentFixture<OneReservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneReservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
