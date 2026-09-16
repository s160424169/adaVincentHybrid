import { TestBed } from '@angular/core/testing';
import { Transaksi } from './transaksi';

describe('Transaksi', () => {
  let service: Transaksi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Transaksi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
