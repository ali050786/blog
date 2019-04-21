import { TestBed } from '@angular/core/testing';

import { BlogServicesService } from './blog-services.service';

describe('BlogServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogServicesService = TestBed.get(BlogServicesService);
    expect(service).toBeTruthy();
  });
});
