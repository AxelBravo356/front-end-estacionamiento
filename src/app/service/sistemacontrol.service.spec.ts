import { TestBed } from '@angular/core/testing';

import { SistemacontrolService } from './sistemacontrol.service';

describe('SistemacontrolService', () => {
  let service: SistemacontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemacontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
