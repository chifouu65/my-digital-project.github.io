import { TestBed } from '@angular/core/testing';

import { ViewHelperService } from './view-helper.service';

describe('ViewHelperService', () => {
  let service: ViewHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
