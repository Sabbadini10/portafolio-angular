import { TestBed } from '@angular/core/testing';

import { ProyectosdataService } from './proyectosdata.service';

describe('ProyectosdataService', () => {
  let service: ProyectosdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
