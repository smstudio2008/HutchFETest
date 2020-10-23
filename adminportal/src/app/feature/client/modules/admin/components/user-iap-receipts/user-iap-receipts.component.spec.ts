import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIapReceiptsComponent } from './user-iap-receipts.component';

describe('UserIapReceiptsComponent', () => {
  let component: UserIapReceiptsComponent;
  let fixture: ComponentFixture<UserIapReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIapReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIapReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
