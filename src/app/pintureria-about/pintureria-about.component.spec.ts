import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintureriaAboutComponent } from './pintureria-about.component';

describe('PintureriaAboutComponent', () => {
  let component: PintureriaAboutComponent;
  let fixture: ComponentFixture<PintureriaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintureriaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintureriaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
