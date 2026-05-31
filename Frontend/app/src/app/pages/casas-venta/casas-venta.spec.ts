import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasVenta } from './casas-venta';

describe('CasasVenta', () => {
  let component: CasasVenta;
  let fixture: ComponentFixture<CasasVenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasasVenta],
    }).compileComponents();

    fixture = TestBed.createComponent(CasasVenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
