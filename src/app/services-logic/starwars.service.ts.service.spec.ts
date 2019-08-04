import { TestBed, inject } from '@angular/core/testing';

import { Starwars.Service.TsService } from './starwars.service.ts.service';

describe('Starwars.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Starwars.Service.TsService]
    });
  });

  it('should be created', inject([Starwars.Service.TsService], (service: Starwars.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
