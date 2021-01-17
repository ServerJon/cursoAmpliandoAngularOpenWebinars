import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEntradaComponent } from './detalle-entrada.component';

describe('DetalleEntradaComponent', () => {
  let component: DetalleEntradaComponent;
  let fixture: ComponentFixture<DetalleEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
