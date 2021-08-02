import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGolosinaComponent } from './add-golosina.component';

describe('AddGolosinaComponent', () => {
  let component: AddGolosinaComponent;
  let fixture: ComponentFixture<AddGolosinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGolosinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGolosinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
