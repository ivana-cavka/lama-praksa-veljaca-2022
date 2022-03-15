import { TestBed } from '@angular/core/testing';

import { AtributiPredmetaServiceService } from './atributi-predmeta-service.service';

describe('AtributiPredmetaServiceService', () => {
  let service: AtributiPredmetaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtributiPredmetaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
