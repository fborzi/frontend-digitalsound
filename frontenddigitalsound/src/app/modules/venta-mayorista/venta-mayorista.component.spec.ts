import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaMayoristaComponent } from './venta-mayorista.component';

describe('VentaMayoristaComponent', () => {
  let component: VentaMayoristaComponent;
  let fixture: ComponentFixture<VentaMayoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaMayoristaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaMayoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
