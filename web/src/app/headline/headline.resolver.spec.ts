import { TestBed } from '@angular/core/testing';

import { HeadlineResolver } from './headline.resolver';

describe('HeadlineResolver', () => {
  let resolver: HeadlineResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeadlineResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
