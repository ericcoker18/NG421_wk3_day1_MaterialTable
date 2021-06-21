import { TestBed } from '@angular/core/testing';

import { AvengerServiceService } from './avenger-service.service';

describe('AvengerServiceService', () => {
  let service: AvengerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvengerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
