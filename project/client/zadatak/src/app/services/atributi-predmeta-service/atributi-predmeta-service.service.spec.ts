import { TestBed } from '@angular/core/testing';
import { AtributiPredmetaService } from './atributi-predmeta-service.service';


describe('AtributiPredmetaService', () => {
  let service: AtributiPredmetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtributiPredmetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
