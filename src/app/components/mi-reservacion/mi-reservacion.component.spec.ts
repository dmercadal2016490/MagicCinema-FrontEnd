import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiReservacionComponent } from './mi-reservacion.component';

describe('MiReservacionComponent', () => {
  let component: MiReservacionComponent;
  let fixture: ComponentFixture<MiReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiReservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
