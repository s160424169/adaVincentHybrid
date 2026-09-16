import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeranjangPage } from './keranjang.page';

describe('KeranjangPage', () => {
  let component: KeranjangPage;
  let fixture: ComponentFixture<KeranjangPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KeranjangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
