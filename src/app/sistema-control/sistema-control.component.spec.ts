import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaControlComponent } from './sistema-control.component';

describe('SistemaControlComponent', () => {
  let component: SistemaControlComponent;
  let fixture: ComponentFixture<SistemaControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemaControlComponent]
    });
    fixture = TestBed.createComponent(SistemaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
