import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaMayoristaSignUpComponent } from './venta-mayorista-signup.component';

describe('VentaMayoristaComponent', () => {
  let component: VentaMayoristaSignUpComponent;
  let fixture: ComponentFixture<VentaMayoristaSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaMayoristaSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaMayoristaSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
