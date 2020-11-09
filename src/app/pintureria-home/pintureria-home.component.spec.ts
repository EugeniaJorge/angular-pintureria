import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintureriaHomeComponent } from './pintureria-home.component';

describe('PintureriaHomeComponent', () => {
  let component: PintureriaHomeComponent;
  let fixture: ComponentFixture<PintureriaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintureriaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintureriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
