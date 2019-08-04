import { TestBed, inject } from '@angular/core/testing';

import { Logging.Service.TsService } from './logging.service.ts.service';

describe('Logging.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Logging.Service.TsService]
    });
  });

  it('should be created', inject([Logging.Service.TsService], (service: Logging.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
