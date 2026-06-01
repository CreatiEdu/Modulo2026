import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenosLotes } from './terrenos-lotes';

describe('TerrenosLotes', () => {
  let component: TerrenosLotes;
  let fixture: ComponentFixture<TerrenosLotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerrenosLotes],
    }).compileComponents();

    fixture = TestBed.createComponent(TerrenosLotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
