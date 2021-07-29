import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolosinasComponent } from './golosinas.component';

describe('GolosinasComponent', () => {
  let component: GolosinasComponent;
  let fixture: ComponentFixture<GolosinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolosinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolosinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
