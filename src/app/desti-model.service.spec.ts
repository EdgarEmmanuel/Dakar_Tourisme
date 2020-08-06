import { TestBed } from '@angular/core/testing';

import { DestiModelService } from './desti-model.service';

describe('DestiModelService', () => {
  let service: DestiModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestiModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
