import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoItemComponent } from './crypto-item.component';

describe('CryptoItemComponent', () => {
  let component: CryptoItemComponent;
  let fixture: ComponentFixture<CryptoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoItemComponent]
    });
    fixture = TestBed.createComponent(CryptoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
