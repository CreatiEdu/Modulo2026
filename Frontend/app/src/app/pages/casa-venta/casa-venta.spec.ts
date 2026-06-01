import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaVenta } from './casa-venta';

describe('CasaVenta', () => {
  let component: CasaVenta;
  let fixture: ComponentFixture<CasaVenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaVenta],
    }).compileComponents();

    fixture = TestBed.createComponent(CasaVenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
