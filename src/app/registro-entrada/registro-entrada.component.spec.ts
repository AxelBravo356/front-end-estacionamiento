import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntradaComponent } from './registro-entrada.component';

describe('RegistroEntradaComponent', () => {
  let component: RegistroEntradaComponent;
  let fixture: ComponentFixture<RegistroEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroEntradaComponent]
    });
    fixture = TestBed.createComponent(RegistroEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
