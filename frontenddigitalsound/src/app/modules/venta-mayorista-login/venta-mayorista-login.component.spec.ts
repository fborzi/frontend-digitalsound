import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaMayoristaLoginComponent } from './venta-mayorista-login.component';

describe('VentaMayoristaLoginComponent', () => {
  let component: VentaMayoristaLoginComponent;
  let fixture: ComponentFixture<VentaMayoristaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaMayoristaLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaMayoristaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
