import { TestBed } from '@angular/core/testing';

import { HttpSreviceService } from './http-srevice.service';

describe('HttpSreviceService', () => {
  let service: HttpSreviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSreviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
