import { TestBed } from '@angular/core/testing';

import { Heroes2Service } from './heroes2.service';

describe('Heroes2Service', () => {
  let service: Heroes2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Heroes2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
