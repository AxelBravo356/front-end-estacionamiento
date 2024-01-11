import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSalidaComponent } from './registro-salida.component';

describe('RegistroSalidaComponent', () => {
  let component: RegistroSalidaComponent;
  let fixture: ComponentFixture<RegistroSalidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroSalidaComponent]
    });
    fixture = TestBed.createComponent(RegistroSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
