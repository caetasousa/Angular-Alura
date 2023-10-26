import { TestBed } from '@angular/core/testing';

import { DepoimentoService } from './depoimento-service.service';

describe('DepoimentoServiceService', () => {
  let service: DepoimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepoimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
