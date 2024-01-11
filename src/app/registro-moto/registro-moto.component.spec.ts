import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMotoComponent } from './registro-moto.component';

describe('RegistroMotoComponent', () => {
  let component: RegistroMotoComponent;
  let fixture: ComponentFixture<RegistroMotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroMotoComponent]
    });
    fixture = TestBed.createComponent(RegistroMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
