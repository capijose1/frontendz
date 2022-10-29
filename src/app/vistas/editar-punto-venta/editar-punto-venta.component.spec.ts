import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPuntoVentaComponent } from './editar-punto-venta.component';

describe('EditarPuntoVentaComponent', () => {
  let component: EditarPuntoVentaComponent;
  let fixture: ComponentFixture<EditarPuntoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPuntoVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
