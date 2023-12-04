import { TestBed } from '@angular/core/testing';

import { AppareilService } from '../service/appareil.service';

describe('AppareilService', () => {
  let service: AppareilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppareilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
