import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransaksidetailPage } from './transaksidetail.page';

describe('TransaksidetailPage', () => {
  let component: TransaksidetailPage;
  let fixture: ComponentFixture<TransaksidetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksidetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
