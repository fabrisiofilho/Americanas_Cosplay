import { TestBed } from '@angular/core/testing';

import { PageServicesService } from './page-services.service';

describe('PageServicesService', () => {
  let service: PageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
