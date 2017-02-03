/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookDataService } from './book-data.service';

describe('Service: BookData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDataService]
    });
  });

  it('should ...', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));
});
