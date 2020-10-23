import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtueProgressComponent } from './ftue-progress.component';

describe('FtueProgressComponent', () => {
  let component: FtueProgressComponent;
  let fixture: ComponentFixture<FtueProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtueProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtueProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
