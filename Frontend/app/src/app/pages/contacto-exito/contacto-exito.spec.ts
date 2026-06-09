import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoExito } from './contacto-exito';

describe('ContactoExito', () => {
  let component: ContactoExito;
  let fixture: ComponentFixture<ContactoExito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoExito],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoExito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
