import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintureriaProductsComponent } from './pintureria-products.component';

describe('PintureriaProductsComponent', () => {
  let component: PintureriaProductsComponent;
  let fixture: ComponentFixture<PintureriaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintureriaProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintureriaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
