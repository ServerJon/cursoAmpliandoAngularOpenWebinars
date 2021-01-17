import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEntradaComponent } from './editar-entrada.component';

describe('EditarEntradaComponent', () => {
  let component: EditarEntradaComponent;
  let fixture: ComponentFixture<EditarEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
