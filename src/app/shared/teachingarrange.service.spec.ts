import { TestBed, inject } from '@angular/core/testing';

import { TeachingarrangeService } from './teachingarrange.service';

describe('TeachingarrangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeachingarrangeService]
    });
  });

  it('should be created', inject([TeachingarrangeService], (service: TeachingarrangeService) => {
    expect(service).toBeTruthy();
  }));
});
