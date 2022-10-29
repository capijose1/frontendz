import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPuntoVentaComponent } from './nuevo-punto-venta.component';

describe('NuevoPuntoVentaComponent', () => {
  let component: NuevoPuntoVentaComponent;
  let fixture: ComponentFixture<NuevoPuntoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPuntoVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
