import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOfferReceiptsComponent } from './user-offer-receipts.component';

describe('UserOfferReceiptsComponent', () => {
  let component: UserOfferReceiptsComponent;
  let fixture: ComponentFixture<UserOfferReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOfferReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOfferReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
