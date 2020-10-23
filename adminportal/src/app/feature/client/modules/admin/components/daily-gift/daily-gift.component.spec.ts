import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyGiftComponent } from './daily-gift.component';

describe('DailyGiftComponent', () => {
  let component: DailyGiftComponent;
  let fixture: ComponentFixture<DailyGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
