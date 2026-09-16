import { TestBed } from '@angular/core/testing';
import { Tema } from './tema';

describe('Tema', () => {
  let service: Tema;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tema);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
