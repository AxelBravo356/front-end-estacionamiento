import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroScComponent } from './registro-sc.component';

describe('RegistroScComponent', () => {
  let component: RegistroScComponent;
  let fixture: ComponentFixture<RegistroScComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroScComponent]
    });
    fixture = TestBed.createComponent(RegistroScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
