import { TestBed, async, inject } from '@angular/core/testing';

import { MygaurdGuard } from './mygaurd.guard';

describe('MygaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MygaurdGuard]
    });
  });

  it('should ...', inject([MygaurdGuard], (guard: MygaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
