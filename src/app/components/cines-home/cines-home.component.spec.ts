import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesHomeComponent } from './cines-home.component';

describe('CinesHomeComponent', () => {
  let component: CinesHomeComponent;
  let fixture: ComponentFixture<CinesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
